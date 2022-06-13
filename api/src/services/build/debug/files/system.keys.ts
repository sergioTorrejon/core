import { PathFile } from "src/utils/file-manager/valitation/validation.file"
import { EnumToString } from "src/utils/helpers/convert/enum-to-string.convert"
import { Debug } from "src/constants/enums/action/action.enum"

// FILE TYPEORM CONFIG - NO MODIFICAR
const DOCS = { name:'STORAGE', label:'REPOSITORIO', path:'storage', childs:[] }
const FILES = { name:'STORAGE', label:'REPOSITORIO', path:'storage', childs:[] }
const LOGS = { name:'STORAGE', label:'REPOSITORIO', path:'storage', childs:[] }

const STORAGE = { name:'STORAGE', label:'REPOSITORIO', path:'storage', childs:[] }

const REPOSITORY = { name:'FILES', label:'ARCHIVOS', path:'', childs:[STORAGE] }

export const PATH_API=process.cwd();

export const ORMCONFIG='ormconfig.json'

export const KEY_SEPARATOR_ROUTE='\\'

export const PATH_LOG=PATH_API

export const PATH_LOG_INFO=PATH_LOG+'info\\'
export const FILE_LOG_INFO='info.log'

export const PATH_LOG_DEBUG=PATH_LOG+'debug\\'
export const FILE_LOG_DEBUG='debug.log'

export const PATH_LOG_ERROR=PATH_LOG+'error\\'
export const FILE_LOG_ERROR='error.log'

export const PATH_LOG_LOG=PATH_LOG+'log\\'
export const FILE_LOG_LOG='log.log'

