import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator';
import { ValidationMessageEnum } from 'src/constants/enums/i18n/es.enum';

export const IS_NOMBRE_APELLIDO = 'nombreApellido';

export function nombreApellido(value: string): boolean {
  const regex = new RegExp(/^[A-Za-zÁ-ÖÚ-öú-ÿñÑ'\s]{3,30}$/);
  return value ? regex.test(value) : false;
}

export function NombreApellido(
  validationsOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: 'NOMBRE_APELLIDO',
      constraints: [],
      validator: {
        validate: (value): boolean => nombreApellido(value),
        defaultMessage: buildMessage(
          () => ValidationMessageEnum.NOMBRE_APELLIDO,
          validationsOptions,
        ),
      },
    },
    validationsOptions,
  );
}
