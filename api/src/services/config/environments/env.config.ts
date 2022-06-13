
import { logger }  from 'src/core/logger/logger.service';
import { TYPEORM_CONFIG } from '../../../database/typeorm/typeorm.keys';

export function ConfigEnvironment(){    
    const CONFIG = TYPEORM_CONFIG;
    logger.setContext(`ENVIRONMENT`)
    logger.log(`AMBIENTE - (${CONFIG.env})`)
    return CONFIG
}