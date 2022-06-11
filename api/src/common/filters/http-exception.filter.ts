import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { AppLogger } from 'src/core/logger/logger.service';
import { FailedResponseDTO } from '../dtos/error/failed-response.dto';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const logger = new AppLogger();
    logger.setContext('HttpException');

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    logger.error(JSON.stringify(exception.message));
    const resp: FailedResponseDTO = {
      errorMessage: exception.message,
    };

    response.status(status).json(resp);
  }
}