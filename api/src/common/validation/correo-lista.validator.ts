import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator';
import { Configurations } from 'src/common/email/black-list/set.params';
import { ValidationMessageEnum } from 'src/constants/enums/i18n/es.enum';

export const IS_CORREO_LISTA = 'correoLista';

export function correoLista(value: string): boolean {
  const nameEmail = value?.substring(0, value?.lastIndexOf('@'));
  const domainEmail = value?.substring(value?.lastIndexOf('@') + 1);
  const isValid =
    domainEmail && nameEmail
      ? !Configurations.BLACK_LIST_EMAILS.some(
          (domain) => domainEmail === domain,
        )
      : false;

  return isValid;
}

export function CorreoLista(
  validationsOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: 'CORREO_LISTA',
      constraints: [],
      validator: {
        validate: (value): boolean => correoLista(value),
        defaultMessage: buildMessage(
          () => ValidationMessageEnum.CORREO_LISTA,
          validationsOptions,
        ),
      },
    },
    validationsOptions,
  );
}
