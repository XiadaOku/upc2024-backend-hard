import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  require("dotenv").config();
  
  const app = await NestFactory.create(AppModule);
  
  app.use(
    '/graphql',
    cors<cors.CorsRequest>({ origin: ['http://localhost', 'https://upc2024-backend-hard.onrender.com'] }),
  );

  await app.listen(3000);
}
bootstrap();
