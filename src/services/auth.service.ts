import { Injectable } from '@nestjs/common';
import {  OAuth2Client } from 'google-auth-library';
import { ConfigService } from '@nestjs/config'
import { PrismaService } from './prisma.service';

interface EmailResponse {
  email: string
  email_verified: boolean
  picture: string
  sub: string
}

@Injectable()
export class AuthService {
  private readonly oAuthClient: OAuth2Client;

  constructor(private configService: ConfigService, private prisma: PrismaService) {
    this.oAuthClient = new OAuth2Client(
      this.configService.get('OAUTH_CLIENT_ID'),
      this.configService.get('OAUTH_CLIENT_SECRET'),
      this.configService.get('OAUTH_REDIRECT_URL'),
  );
  }

  getAuthUrl(): string {
    const authorizeUrl = this.oAuthClient.generateAuthUrl({
        access_type: 'offline',
        scope: ['openid', 'email']
    })
    return authorizeUrl;
  }

  getAuthCode (url: string): string {
     const newUrl = new URL (url, 'http://localhost:3000' );
     const code = newUrl.searchParams.get('code');

     return code;
  }

  async setToken(code: string): Promise<void> {
    const token = await this.oAuthClient.getToken(code);
    this.oAuthClient.setCredentials(token.tokens);
  }

  async getClientEmail(): Promise<string> {
    const {data} = await this.oAuthClient.request<EmailResponse>({
      url: 'https://openidconnect.googleapis.com/v1/userinfo'
    })
    
    this.prisma.user.create({
      data: {
        email: data.email
      }
      
    })
    return data.email;
  }
}

