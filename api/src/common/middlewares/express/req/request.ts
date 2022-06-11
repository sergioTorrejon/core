import { AppLogger } from 'src/core/logger/logger.service';
const logger = new AppLogger()
export async function RequestLogger(req:any){
    const { ip, method, baseUrl } = req;
    logger.setContext(`CALL-${method}`)
    const log = `[HTTP]-->[${baseUrl}]--[${ip}]`
    logger.log(`${log}`)
}