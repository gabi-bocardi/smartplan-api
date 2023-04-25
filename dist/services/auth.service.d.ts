import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';
export declare class AuthService {
    private configService;
    private prisma;
    private readonly oAuthClient;
    constructor(configService: ConfigService, prisma: PrismaService);
    getAuthUrl(): string;
    getAuthCode(url: string): string;
    setToken(code: string): Promise<void>;
    getClientEmail(): Promise<string>;
}
