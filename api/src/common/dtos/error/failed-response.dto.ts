import { CustomValidationError } from "src/common/interfaces";

export class FailedResponseDTO {
  errorMessage: string;
  errors?: CustomValidationError;
  errorType?: string;
}