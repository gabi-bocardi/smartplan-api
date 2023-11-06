import { MiddlewareConsumer, Module, RequestMethod, ValidationPipe } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { UserController } from './controllers/user.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    PrismaService,
    AuthService,
  ],
  controllers: [
    UserController,
  ],
})

export class AppModule { }
