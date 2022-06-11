import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { AppLogger } from 'src/core/logger/logger.service';
import { FailedResponseDTO } from '../dtos/error/failed-response.dto';


@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    const logger = new AppLogger();
    logger.setContext('BadRequestException');
    logger.error(JSON.stringify(exception.message));

    const resp: FailedResponseDTO = {
      errorMessage: exception.message,
    };

    response.status(status).json(resp);
  }
}
