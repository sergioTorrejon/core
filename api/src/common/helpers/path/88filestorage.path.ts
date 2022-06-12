import * as dotenv from 'dotenv';
import { PATH_STORAGE_LOGS } from './files.path';
dotenv.config();
const path = require('path');

const pathStorageLogs = ( file : string ='' ) => {
    
    if(file === ''){
        const archivo= path.join(PATH_STORAGE_LOGS,'common', path.sep)
        return archivo;
    }
    else{
        const archivo= path.join(PATH_STORAGE_LOGS,file, path.sep)
        return archivo
    }
}

export default pathStorageLogs