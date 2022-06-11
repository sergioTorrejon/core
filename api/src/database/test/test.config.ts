import { Client, ClientConfig } from 'pg';
import { loggerMsg } from 'src/constants/enums';
import { AppLogger } from 'src/core/logger/logger.service';

export async function testConnection(config){
    const logger = new AppLogger()
    logger.setContext(`DB_TEST`)
    const conn = new Client({user:config.username,...config});
    return  new Promise((resolve,reject)=>{
        conn.connect( (err: { message: any; }) => {
            if (err) {//ERROR CONNECTION TO DATABASE STOP
                resolve (false);
                logger.error(loggerMsg.FAIL_DB_CONNECTION);
                logger.error(err.message);
            } else {//SUCCESS CONNECTION TO DATABSE RUN APP
                resolve(true);
                logger.debug(loggerMsg.SUCCESS_DB_CONNECTION);
            }
        });
    }) 
}