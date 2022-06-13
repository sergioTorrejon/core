import { Injectable } from '@nestjs/common';
import { responseSuccess } from './services/res/res.config';
import { resMsg } from './constants/enums';

@Injectable()
export class AppService {
  async getAppStatus(){
    const response = await responseSuccess(resMsg.SERVICE_ACTIVE)
    return response
  }
}
