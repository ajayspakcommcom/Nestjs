import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
// import * as dotenv from 'dotenv';
import { config } from 'dotenv';
import { CustomExceptionFilter } from './filters/custom-exception.filter';
import { ValidationPipe } from './pipes/validation.pipe';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

async function bootstrap() {
  //dotenv.config();
  config();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: "*",
  });
  app.useGlobalFilters(new CustomExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
