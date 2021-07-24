import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // let port = process.env.PORT;
  // if (port == null || port == "") {
  //   port = 8000;
  // }
  
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
