import { Injectable, Logger, Scope } from '@nestjs/common';
import { fullTimeStamp } from 'src/common/helpers/date/local.date';
import { AppEndFile } from 'src/common/file-manager/update/update.file';
import { FILE_LOG_ERROR, FILE_LOG_INFO, FILE_LOG_LOG, PATH_LOG_ERROR, PATH_LOG_INFO, PATH_LOG_LOG } from 'src/core/build/debug/files/system.keys';
import { Debug, DebugLogs } from 'src/constants/enums/action/action.enum';
import pathStorageLogs from 'src/common/path/filestorage.path';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger {
  private context?: string;
  private process?: string;
  private message?: string;
  private prefix?: string;
  private logger = new Logger()

  public setContext(context: string): void {
    this.context = context;
    this.prefix = `${fullTimeStamp()}-`
    this.message = `${fullTimeStamp()}-[${this.context}]===>`
    this.logger = new Logger(this.context)
    this.process = '';

  }

  public setProcess(process: string): void {
    this.process = process;
  }



  //SAVE TO FILES
  debugSaveFile( message: string='') {
    AppEndFile(pathStorageLogs(Debug.DEBUG),DebugLogs.DEBUG,`${message}`)
  }

  infoSaveFile(message: string='' ) {
    AppEndFile(pathStorageLogs(Debug.INFO),DebugLogs.INFO,`${message}`)
    this.logger.log(message)
  }

  logSaveFile(message: string='' ) {
    AppEndFile(pathStorageLogs(Debug.LOG),DebugLogs.LOG,`${message}`)
  }

  sessionSaveFile(message: string='' ) {
    AppEndFile(pathStorageLogs(Debug.INFO),DebugLogs.INFO,`${message}`)
    this.logger.log(message)
  } 

  textLogger(message: string=''){
    AppEndFile(PATH_LOG_INFO,FILE_LOG_INFO,`${message}`)
    this.logger.log(message)
  }

//BUSSINES LOGGER
  start(message: string='') {
    console.log('file',pathStorageLogs(Debug.DEBUG))
    this.debugSaveFile(`\n\n\n----------------------`);
    this.debugSaveFile(` ${message}`)
    this.logger.log(message)
  }

  run( message: string='' ) {
    this.debugSaveFile(`${message}`)
    this.logger.log(message)
  }

  debug( message: string='') {
    this.debugSaveFile(`${message}`)
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
