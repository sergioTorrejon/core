import fs = require('fs');
import { ORMCONFIG } from 'src/services/build/debug/files/system.keys';
import { AppLogger } from 'src/core/logger/logger.service';
import { ConnectionOptions } from "typeorm";
const logger = new AppLogger()

const generateTypeormConfigFile = async (config:any) => {
  logger.setContext(`TYPEORM`)
  const typeormConfig =  config as ConnectionOptions;
  fs.writeFileSync(ORMCONFIG, JSON.stringify(typeormConfig, null, 2));
  
  logger.debug(`Se creo el archivo de configuracion typeorm: ${ORMCONFIG}` )
}
export default generateTypeormConfigFile