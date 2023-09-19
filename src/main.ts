import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './services/prisma.service';

async function main() {
  const firebaseConfig = {

  };

  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'error', 'warn', 'log']
  });
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(5000);
  console.log('Listening on', await app.getUrl());
}
main();
