import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { resMsg } from 'src/constants/enums';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username', // 'username'
      passwordField: 'password', // 'passport'
    });
  }

  async validate(username: string, password: string) {
    const user = await this.authService.validateUser(username, password);
    if (!user)
      throw new UnauthorizedException(resMsg.UNAUTHENTICATION_NO_MATCH);
    return user;
  }
}
