import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { initSwagger } from './core/swagger/swagger';
import { globalPipe } from './common/pipes';
import setDefaultUser from './services/build/debug/set-default/set-default-user';
import { start } from './services/build';
import { BadRequestExceptionFilter, HttpExceptionFilter, QueryFailedExceptionFilter, ValidationExceptionFilter } from './common/filters';
import { ENV } from './config/config';
import { logger } from './core/logger/logger.service';

// FUNCTION MAIN
async function main() {
  const build = await start();
  if(!build)  return;
  bootstrap(); // SUCCESS TEST CONNECTION DB
}

//FUNCTION START APPLICATION
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // CREATE APPLICATION WITH NESTJS AND EXPRESS
  const configService = app.get(ConfigService); // CREATE CONFIGSERVICE APP GLOBALS ENVIRONMENTS VARIABLES
  await setDefaultUser(configService); //SCRIPT CREATE PARAMS TO DATABASE 
  await initSwagger(app); //DOCUMENTATION APP WITH SWAGGER
  app.enable('trust proxy'); //ENABLED PROXY TRUST (PROXY DE CONFIANZA)
  app.enableCors(); //SETTING CORS
  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new BadRequestExceptionFilter(),
    new QueryFailedExceptionFilter(),
    new ValidationExceptionFilter(),
  );
  //app.useGlobalFilters(new HttpExceptionFilter());
/*   const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter()); */
  app.useGlobalPipes(new ValidationPipe(globalPipe)); //SETTING PIPES
  await app.listen(ENV.SERVER_PORT); //RUN API REST
  logger.setContext(`RUN`)
  logger.run(`${ENV.NODE_ENV}--Server is running at: ${await app.getUrl()} --- Test: ${await app.getUrl()}/test`); //LOGGER SERVER RUNNING
}
main(); //RUN INIT
