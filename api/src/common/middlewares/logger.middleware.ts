import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RespLogger } from '../logger/resp/resp.logger';
import { RequestLogger } from './express/req/request';

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