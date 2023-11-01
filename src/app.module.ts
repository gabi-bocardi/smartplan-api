import { MiddlewareConsumer, Module, RequestMethod, ValidationPipe} from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { UserController } from './controllers/UserController';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    PrismaService,
  ],
  controllers: [
    UserController,
  ],
})

export class AppModule{}
