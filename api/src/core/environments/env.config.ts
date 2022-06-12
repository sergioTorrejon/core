import { ENV } from 'src/configuration/settings/env/env';
import { Environment } from 'src/constants/enums';
import { AppLogger } from 'src/core/logger/logger.service';
import Development from './development/development.config';
import Production from './production/production.config';


export function ConfigEnvironment(){
    const logger = new AppLogger()
    console.log(ENV)
    logger.setContext(`ENVIRONMENT`)
    if (ENV.NODE_ENV === Environment.Development) {
        logger.log(`AMBIENTE DE DESARROLLO - (${Environment.Development})`)
        return Development()
    }
    else{
        logger.debug(`AMBIENTE DE PRODUCCION - (${Environment.Development})`)
        return Production()
    }
}