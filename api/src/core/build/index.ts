import { AppLogger } from 'src/core/logger/logger.service';
import { ConfigEnvironment } from '../environments/env.config';



export function start(){
    const logger = new AppLogger()
    logger.setContext(`START`)
    logger.start('Iniciando...')
    const confEnv = ConfigEnvironment();

    return confEnv;

}