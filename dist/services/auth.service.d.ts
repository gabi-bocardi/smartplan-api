import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private configService;
    private readonly logger;
    private readonly oAuthClient;
    constructor(configService: ConfigService);
    getAuthUrl(): string;
    getAuthCode(url: string): string;
    setToken(code: string): Promise<void>;
    getClientEmail(): Promise<string>;
}
