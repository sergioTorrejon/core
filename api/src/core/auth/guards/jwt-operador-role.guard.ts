import { Injectable, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/constants/enums';

@Injectable()
export class JwtOperadorRoleGuard extends AuthGuard('jwt') {

  handleRequest(err, user, info: Error) {
    if (user && user.role && user.role.some(r=> [Role.OPERADOR, Role.SUPERVISOR].includes(r)) ) {
      return user;
    } 
    throw new ForbiddenException();
  }
} 