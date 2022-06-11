import { AppLogger } from 'src/core/logger/logger.service';
const logger = new AppLogger()
export async function CallLoggerHttp(req:any){
    const { ip, method, baseUrl } = req;
    const userAgent = req.get('user-agent') || '';
    const log = `[${userAgent}]--[${ip}]`
    logger.setContext(`CALL-${method}-->(${baseUrl})`)
    console.log(``)
    console.log(`-----------------------------------------------------------------------`)
    logger.log(`${log}`)
}