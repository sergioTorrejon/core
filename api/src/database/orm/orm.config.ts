import { loggerMsg } from 'src/constants/enums';
import { AppLogger } from 'src/core/logger/logger.service';
const logger = new AppLogger()
export function ConfBD(){
    return  new Promise((resolve,reject)=>{
        logger.setContext(`ORMCONFIG`)
        let fs = require('fs');
        fs.readFile('./ormconfig.json', 'utf-8', (err, data) => {
            if(err) {
                logger.error(loggerMsg.FAIL_ORMCONFIG);
                logger.error(err.message);
                resolve ('error')
            } else {
                logger.debug(loggerMsg.SUCCESS_ORMCONFIG);
                resolve (JSON.parse(data))
            }
        });
    }) 
}