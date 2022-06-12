import { Injectable, Logger, Scope } from '@nestjs/common';
import { fullTimeStamp } from 'src/common/helpers/format/datetime.format';
import { AppEndFile } from 'src/core/utils/file-manager/update/update.file';
import { FILE_LOG_DEBUG, FILE_LOG_ERROR, FILE_LOG_INFO, FILE_LOG_LOG, PATH_LOG_DEBUG, PATH_LOG_ERROR, PATH_LOG_INFO, PATH_LOG_LOG } from 'src/core/build/debug/files/system.keys';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger {
  private context?: string;
  private logger = new Logger()

  public setContext(context: string): void {
    this.context = context;
    this.logger = new Logger(this.context)
  }

  //SAVE TO FILES
  debugSaveFile( message: string='') {
    AppEndFile(PATH_LOG_DEBUG,FILE_LOG_DEBUG,`${fullTimeStamp()}--[CONFIG]--[${this.context}]-- ${message}`)
  }

  logSaveFile(message: string='' ) {
    //this.logger.log(message)
    AppEndFile(PATH_LOG_LOG,FILE_LOG_LOG,`${fullTimeStamp()}--[${this.context}]-- ${message}`)
    this.info(message)
  }

  infoSaveFile(message: string='' ) {
    AppEndFile(PATH_LOG_INFO,FILE_LOG_INFO,`${fullTimeStamp()}--[${this.context}]-- ${message}`)
    this.logger.log(message)
  }

  sessionSaveFile(message: string='' ) {
    AppEndFile(PATH_LOG_INFO,FILE_LOG_INFO,`${fullTimeStamp()}--[${this.context}]-- ${message}`)
    this.logger.log(message)
  }

//BUSSINES LOGGER
  start( ) {
    const msg = `\n\n\n${fullTimeStamp()}--[START]-- npm run start`
    this.debugSaveFile(msg)
  }

  run( message: string='' ) {
    const msg = `${fullTimeStamp()}--[${this.context}]-- ${message}`
    this.debugSaveFile(msg)
    this.logger.log(message)
  }

  debug( message: string='') {
    const msg = `${fullTimeStamp()}--[CONFIG]--[${this.context}]-- ${message}`
    this.debugSaveFile(msg)
    AppEndFile(PATH_LOG_DEBUG,FILE_LOG_DEBUG,`${fullTimeStamp()}--[CONFIG]--[${this.context}]-- ${message}`)
  }

  log(message: string='' ) {
    //this.logger.log(message)
    AppEndFile(PATH_LOG_LOG,FILE_LOG_LOG,`${fullTimeStamp()}--[${this.context}]-- ${message}`)
    this.info(message)
  }

  error(message: string='') {
    this.logger.error(message)
    AppEndFile(PATH_LOG_ERROR,FILE_LOG_ERROR,`${fullTimeStamp()}--[${this.context}]-- ${message}`)
  }

  warn( ) {
    console.log('warn',this.context)
  }

  verbose( ) {
    console.log('verbose',this.context)
  }

  info(message: string='' ) {
    this.logger.log(message)
  }

}
