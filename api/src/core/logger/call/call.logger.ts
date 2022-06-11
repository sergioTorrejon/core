import { AppLogger } from 'src/core/logger/logger.service';
const logger = new AppLogger()
export async function CallLogger(req:any){
    const { ip, method, route , user} = req;
    const log = `[CALL]-[${user.username}]-->[${route.path}]--[${ip}]`
    logger.setContext(`${method}`)
    logger.log(`${log}`)
}