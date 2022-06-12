import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { FailedResponseDTO } from 'src/common/dtos';
import { QueryFailedExceptionI } from 'src/common/interfaces';
import { PS_EXCEPTIONS } from 'src/constants/keys/postgres-constants';
import { AppLogger } from 'src/core/logger/logger.service';
import { QueryFailedError } from 'typeorm';

    //TODO: REVISAR SI SE PUEDE MEJORAR

@Catch(QueryFailedError)
export class QueryFailedExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedExceptionI, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();
    const statusCode = 500;

    const errorType = PS_EXCEPTIONS[exception.code] || 'Database Error';

    const logger = new AppLogger();
    logger.setContext('QueryFailedException');
    logger.error(JSON.stringify(exception.message));

    const resp: FailedResponseDTO = {
      errorMessage: exception.message,
      errorType: errorType,
    };

    if (process.env.NODE_ENV !== 'production') {
      resp.errorMessage = exception.message;
    }

    response.status(statusCode).json(resp);
  }
}
