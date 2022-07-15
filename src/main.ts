import * as fs from 'fs';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const { API_PUERTO_CF_APPEVALUATIONCDT } = process.env;

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .addServer('api/v1')
    .setTitle('CDT - App Evaluation')
    .setDescription('Servicios para la evaluacion de CDT')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);

    fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
    SwaggerModule.setup('api', app, document);
    app.enableCors();
    app.setGlobalPrefix('api/v1')
    app.useGlobalPipes(new ValidationPipe({}));

    await app.listen(API_PUERTO_CF_APPEVALUATIONCDT);
}
bootstrap();
