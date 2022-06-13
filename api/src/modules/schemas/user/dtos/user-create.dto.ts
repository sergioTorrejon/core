import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsArray,
  IsEnum,
} from 'class-validator';
import { EnumToString } from 'src/utils/helpers';
import { Role } from 'src/constants/enums';

export class UserCreateDto {
  @IsString()
  @MaxLength(500)
  username: string;

  @IsString()
  @MaxLength(255)
  company: string;

  @IsString()
  @MaxLength(255)
  name: string;

  @IsString()
  @MaxLength(255)
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;

  @IsArray()
  @IsEnum(Role, {
    each: true,
    message: `must be a valid role value, ${EnumToString(Role)}`,
  })
  role: string[];

}
