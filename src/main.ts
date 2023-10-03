import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './services/prisma.service';
import * as firebase from 'firebase-admin';

async function main() {
  
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'error', 'warn', 'log']
  });
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  
  console.log('FIREBASE_AUTH_CREDENTIALS', process.env.FIREBASE_AUTH_CREDENTIALS);
  firebase.initializeApp({
    credential: firebase.credential.cert(JSON.parse(process.env.FIREBASE_AUTH_CREDENTIALS)),
  });
  
  await app.listen(5000);
  console.log('Listening on', await app.getUrl());
}

main();
