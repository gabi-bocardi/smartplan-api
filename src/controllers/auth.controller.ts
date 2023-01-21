import { Controller, Get, Redirect, Req, Request } from '@nestjs/common';
import { AuthService } from '../services/auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @Redirect()
  login() {
    const url = this.authService.getAuthUrl();
    return { url, statusCode: 302 }
  }

  @Get('callback') 
  async callback(@Req()request: Request){
    const code = this.authService.getAuthCode(request.url);
    await this.authService.setToken(code);

    const email =  await this.authService.getClientEmail();
    // check that the email belongs to a user in the database, if yes then authenticate them
    return email;
  }
}