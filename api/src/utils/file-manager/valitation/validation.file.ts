//import * as md5 from 'md5';
import * as fs from 'fs';
import { KEY_SEPARATOR_ROUTE } from 'src/services/build/debug/files/system.keys';
import { AppLogger } from 'src/core/logger/logger.service';
import { FileCreate, PathCreate } from '../create/create.file';


export function PathExist(path: fs.PathLike) {
    try { 
        return fs.existsSync(path); 
    } 
    catch (err) { 
        return false; 
    } 
}

export function PathFile(path: string ,filename: string) {
    const logger = new AppLogger()
    const pathfile = path + KEY_SEPARATOR_ROUTE+filename;
    try { 
        if (!PathExist(path)) {
            PathCreate(path);
        }
        if (!PathExist(pathfile)) {
            FileCreate(pathfile)
            logger.debug('se creo el archivo'+filename)
            return true
        }
        return true
    } 
    catch (err) { 
        return false; 
    } 
}




/* export async function checksumMd5(buf){
    const checksum = md5(buf)
    return checksum;
} */

// Guarda el archivo de forma sincrona
export async function SavePdf(file) {
  //Escribe de forma sincrona el archivo
    const write = fs.writeFileSync(file.originalname,file.buffer);
    return file.originalname
}

// Guarda el archivo de forma sincrona
export async function DeletePdf(file) {
  //Escribe de forma sincrona el archivo
    const write = fs.unlink(file.originalname,file.buffer);
    return file.originalname
}

function fileExists(filePath) { 
    try { 
        return fs.statSync(filePath).isFile(); 
    } 
    catch (err) { 
        return false; 
    } 
}

