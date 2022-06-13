//import * as md5 from 'md5';
import * as fs from 'fs';
import { PathFile } from '../valitation/validation.file';


/* export async function checksumMd5(buf){
    const checksum = md5(buf)
    return checksum;
} */

export async function AppEndFile(path:string, fileName:string, text: string) {
  PathFile(path,fileName)
  fs.appendFile(path+fileName, `${text} \n`, function (err) {
    if (err) throw err;
});
}