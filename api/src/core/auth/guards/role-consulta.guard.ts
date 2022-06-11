import { Injectable, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/constants/enums';

@Injectable()
export class RoleConsultaGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info: Error) {
    if (user && user.role && user.role.some(r=> [Role.OWNER,Role.ADMIN,Role.SUPERVISOR,Role.OPERADOR,Role.CONSULTA].includes(r)) ) {
      return user;
    } 
    throw new ForbiddenException();
  }
} 