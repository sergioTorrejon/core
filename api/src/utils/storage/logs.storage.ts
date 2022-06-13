import * as dotenv from 'dotenv';
import { FilesStorage } from 'src/constants/enums/action/action.enum';
import { ENV } from 'src/config/config';
dotenv.config();
const path = require('path');

const pathStorageLogs = ( file : string ='' ) => {
    
    if(file === ''){
        const archivo= path.join(ENV.PATH_ROOT_STORAGE,FilesStorage,'common', path.sep)
        return archivo;
    }
    else{
        const archivo= path.join(ENV.PATH_ROOT_STORAGE,FilesStorage.LOGS,file, path.sep)
        return archivo
    }
}

export default pathStorageLogs