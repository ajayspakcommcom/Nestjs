import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
// import * as dotenv from 'dotenv';
import { config } from 'dotenv';
import { CustomExceptionFilter } from './filters/custom-exception.filter';
import { ValidationPipe } from './pipes/validation.pipe';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  //dotenv.config();
  config();
  const app = await NestFactory.create(AppModule);

  //app.setGlobalPrefix('api');

  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: "*",
  });
  app.useGlobalFilters(new CustomExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());

  const logger = new Logger();
  app.useLogger(logger);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  await app.listen(3000);
}
bootstrap();
