import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResDto } from './common/dtos';
import { AppLogger } from './core/logger/logger.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly appLogger: AppLogger) {}

  @Get()
  async getAppStatus(): Promise<ResDto>{
    this.appLogger.init(this.getAppStatus.name,'sergio')
    return await this.appService.getAppStatus();
  }
}