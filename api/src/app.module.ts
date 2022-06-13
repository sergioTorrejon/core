import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './core/auth/auth.module';
import { UserModule } from './modules/schemas/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AppLoggerModule } from './core/logger/logger.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filters';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { AppLogger } from './core/logger/logger.service';

@Module({
  imports: [    
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    AppLoggerModule],
  controllers: [AppController],
  exports: [AppLoggerModule
  ],
  providers: [AppLogger,{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
