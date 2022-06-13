import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RespLogger } from 'src/core/logger/resp/resp.logger';
import { RequestLogger } from '../../common/express/req/req.express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    async use(request: Request, response: Response, next: NextFunction): Promise<void> {
        try{
            RequestLogger(request)
            response.on('finish', () => {
                RespLogger(request,response)
            });
            next();
        }
        catch (err) { 
            console.log('errorrrrr')
        } 
    }
}