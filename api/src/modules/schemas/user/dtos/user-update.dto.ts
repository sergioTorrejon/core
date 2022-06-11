import { PartialType, OmitType } from '@nestjs/swagger';
import { UserCreateDto } from '.';

export class UserUpdateDto extends PartialType(
  OmitType(UserCreateDto, ['username'] as const),
) {}
