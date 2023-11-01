import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './services/prisma.service';
import * as firebase from 'firebase-admin';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  
  firebase.initializeApp({
    credential: firebase.credential.cert(JSON.parse(process.env.FIREBASE_AUTH_CREDENTIALS)),
  });
  
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(5000);
  console.log('Listening on', await app.getUrl());
}

main();
