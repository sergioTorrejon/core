const path = require('path');

export const joinPathFolder = ( pathRoot : string, folder:string ) => {
    return  path.join(pathRoot, folder, path.sep)
}
