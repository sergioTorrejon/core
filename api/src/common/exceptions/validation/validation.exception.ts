import { BadRequestException } from '@nestjs/common';
import { CustomValidationError } from 'src/common/interfaces';

export class CustomValidationException extends BadRequestException {
  constructor(public validationErrors: CustomValidationError) {
    super();
  }
}
