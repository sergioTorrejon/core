import { HttpException, HttpStatus } from '@nestjs/common';
import { AppLogger } from 'src/core/logger/logger.service';
const logger = new AppLogger()
export async function RespLogger(req:any, resp:any){
/*     const { method, route , user} = req;
    logger.setContext(`RESP-${method}`)
    const { statusCode, statusMessage } = resp;
    const log = `-->${statusCode} ${statusMessage}`
    //const log = `-->[${user.username}]--[${route.path}] ${statusCode} ${statusMessage}`
    logger.log(`${log}`) */
    const { statusCode, statusMessage } = resp;

    try{
        const { method, route , user} = req;
        logger.setContext(`RESP-${method}`)
        //if(!user) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        
        //logger.setContext(`RESP-${resp.baseUrl}`)
        //console.log('ERROR',resp)
        //if(statusCode>400) throw new HttpException(statusMessage, statusCode);
        const log = `-->[${user.username}]--[${route.path}] ${statusCode} ${statusMessage}`
        //const log = `-->${statusCode} ${statusMessage}`
        logger.log(`${log}`)
    }
    catch (err) { 
        logger.error(`${statusCode} ${ statusMessage}`)
    } 

}