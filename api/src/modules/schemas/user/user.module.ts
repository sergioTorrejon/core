import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities';
import { AppLoggerModule } from 'src/core/logger/logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]),AppLoggerModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, AppLoggerModule],
})
export class UserModule {}
