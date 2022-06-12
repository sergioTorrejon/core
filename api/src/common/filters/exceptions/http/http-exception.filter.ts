import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { FailedResponseDTO } from 'src/common/dtos';
import { AppLogger } from 'src/core/logger/logger.service';
    //TODO: REVISAR SI SE PUEDE MEJORAR
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