import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './services/prisma.service';
import { UserController } from './controllers/UserController';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    PrismaService,
  ],
  controllers: [
    UserController,
  ],
})

export class AppModule{
  // configure(consumer: MiddlewareConsumer): any {
  //   consumer
  //   .apply()
  //   .forRoutes({
  //     path: 'api/*',
  //     method: RequestMethod.ALL
  //   })
  // }
}
