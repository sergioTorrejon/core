import { Injectable, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/constants/enums';

@Injectable()
export class RoleOperadorGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info: Error) {
    if (user && user.role && user.role.some(r=> [Role.OWNER,Role.ADMIN,Role.SUPERVISOR,Role.OPERADOR].includes(r)) ) {
      return user;
    } 
    throw new ForbiddenException();
  }
} 