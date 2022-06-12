import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { initSwagger } from './core/swagger/swagger';
import configType from './configuration/service/global/global.config';
import { globalPipe } from './common/pipes';
import { AppLogger } from './core/logger/logger.service';
import generateTypeormConfigFile from './core/build/debug/typeorm/generate-typeorm-config-file';
import setDefaultUser from './core/build/debug/set-default/set-default-user';
import { start } from './core/build';
import { testConnection } from './database/test/test.config';
import { BadRequestExceptionFilter, HttpExceptionFilter, QueryFailedExceptionFilter, ValidationExceptionFilter } from './common/filters';


const config = start();

// FUNCTION MAIN
async function main() {
  await generateTypeormConfigFile(config); // GENERATE ORM CONFIG SYSTEM
  const connection = await testConnection(config); // TEST CONNECTION DB
  if(!connection)  return false; // ERROR TEST CONNECTION DB
  bootstrap(); // SUCCESS TEST CONNECTION DB
}

//FUNCTION START APPLICATION
async function bootstrap() {
  const logger = new AppLogger()//SET LOGGER FUNCTION
  logger.setContext(`RUN`) 
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // CREATE APPLICATION WITH NESTJS AND EXPRESS
  const configService = app.get(ConfigService); // CREATE CONFIGSERVICE APP GLOBALS ENVIRONMENTS VARIABLES
  await configType(configService) //CONFIG GLOBALS ENVIRONMENTS VARIABLES
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
  await app.listen(config.server_port); //RUN API REST
  logger.run(`${config.env}--Server is running at: ${await app.getUrl()} --- Test: ${await app.getUrl()}/test`); //LOGGER SERVER RUNNING
}
main(); //RUN INIT
