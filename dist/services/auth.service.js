"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const google_auth_library_1 = require("google-auth-library");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("./prisma.service");
let AuthService = class AuthService {
    constructor(configService, prisma) {
        this.configService = configService;
        this.prisma = prisma;
        this.oAuthClient = new google_auth_library_1.OAuth2Client(this.configService.get('OAUTH_CLIENT_ID'), this.configService.get('OAUTH_CLIENT_SECRET'), this.configService.get('OAUTH_REDIRECT_URL'));
    }
    getAuthUrl() {
        const authorizeUrl = this.oAuthClient.generateAuthUrl({
            access_type: 'offline',
            scope: ['openid', 'email']
        });
        return authorizeUrl;
    }
    getAuthCode(url) {
        const newUrl = new URL(url, 'http://localhost:3000');
        const code = newUrl.searchParams.get('code');
        return code;
    }
    async setToken(code) {
        const token = await this.oAuthClient.getToken(code);
        this.oAuthClient.setCredentials(token.tokens);
    }
    async getClientEmail() {
        const { data } = await this.oAuthClient.request({
            url: 'https://openidconnect.googleapis.com/v1/userinfo'
        });
        this.prisma.user.create({
            data: {
                email: data.email
            }
        });
        return data.email;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService, prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map