import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AppLogger } from 'src/core/logger/logger.service';
import { FailedResponseDTO } from '../dtos/failed-response.dto';

import { CustomValidationException } from '../exceptions/validation.exception';

@Catch(CustomValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: CustomValidationException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    
    const logger = new AppLogger();
    logger.setContext('CustomValidationException');
    logger.error(JSON.stringify(exception.validationErrors));

    const resp: FailedResponseDTO = {
      errorMessage: exception.message,
      errors: exception.validationErrors,
    };

    response.status(status).json(resp);
  }
}
