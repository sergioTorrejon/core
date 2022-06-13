import { logger } from 'src/core/logger/logger.service';
import { testConnection } from 'src/database/test/test.config';
import { ConfigEnvironment } from 'src/services/config/environments/env.config';
import generateTypeormConfigFile from './debug/typeorm/generate-typeorm-config-file';

export async function start(){
    logger.setContext(`START`)
    logger.start('Iniciando...')
    const config = ConfigEnvironment();
    generateTypeormConfigFile(config); // GENERATE ORM CONFIG SYSTEM
    return await test(config);
}

export async function test(config){
    logger.setContext(`TEST`)
    logger.log('Test BD')
    const connection = await testConnection(config); // TEST CONNECTION DB
    if(connection)  return true;
    return false // ERROR TEST CONNECTION DB
}