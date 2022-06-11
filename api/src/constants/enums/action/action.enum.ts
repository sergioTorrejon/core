//ACTION OPTIONS
export enum Action {
    CREATE = 'create',
    DERIVED = 'derived',
    REGRESS = 'regress',
    PENDING = 'pending',
    REFUSE = 'refuse',
    MODIFIED = 'modified',
    PASSED = 'passed',
    FINISH = 'finish',
  }

  export enum FilesStorage {
    DOCUMENTS = 'docs',
    LOGS = 'logs',
    IMAGES  = 'images',
    CONFIG = 'config'
  }


  export enum Debug {
    ERROR = 'error',
    DEBUG = 'debug',
    LOG  = 'log',
    INFO = 'info'
  }

  export enum DebugLogs {
    ERROR = 'error.log',
    DEBUG = 'debug.log',
    LOG  = 'log.log',
    INFO = 'info.log'
  }

  export enum Files {
    STORAGE = 'storage',
    FILES = 'files',
    ORM  = 'orm',
    DOCUMENTS = 'documents'
  }