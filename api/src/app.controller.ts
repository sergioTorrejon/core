import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResDto } from './common/dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAppStatus(): Promise<ResDto>{
    return await this.appService.getAppStatus();
  }
}