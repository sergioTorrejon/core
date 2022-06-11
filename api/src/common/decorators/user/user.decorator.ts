import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CallLogger } from 'src/core/logger/call/call.logger';

export const User = createParamDecorator(
  async (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    //TODO: REVISAR SI SE PUEDE MEJORAR
    const { user} = request;
    user.userCreate = user.username;
    user.userUpdate = user.username;
    await CallLogger(request);
    return data ? user && user[data] : user;
  },
);
