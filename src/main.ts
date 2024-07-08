import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as expressApp from '../express';

async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule);
  const expressInstance = expressApp;

  nestApp.use(expressInstance);

  await nestApp.listen(4000);
}
bootstrap();
