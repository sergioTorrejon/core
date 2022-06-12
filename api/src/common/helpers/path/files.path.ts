import * as dotenv from 'dotenv';
import { ENV } from 'src/configuration/settings/env/env';
import { Files, FilesStorage } from 'src/constants/enums/action/action.enum';
dotenv.config();
const path = require('path');

export const PATH_STORAGE= path.join(ENV.PATH_API_FILES,Files.STORAGE)
export const PATH_STORAGE_LOGS= path.join(PATH_STORAGE,FilesStorage.LOGS)
export const PATH_STORAGE_DOCS= path.join(PATH_STORAGE,FilesStorage.DOCUMENTS)
export const PATH_STORAGE_IMAGES= path.join(PATH_STORAGE,FilesStorage.IMAGES)