import { joinPathFolder } from "src/utils/helpers/path/join,path";
import { PATH_API } from "../../settings/setting.config";

//CONFIGURACION DE VARIABLES POR DEFECTO
export const DEFAULT_ENV=
{
    //AMBIENTE DE EJECUCION
    NODE_ENV:'dev',

    //PUERTO DE ARRANQUE DEL SERVIDOR
    SERVER_PORT:3000,
    DEV_SERVER_PORT:3005,

    //CONFIGURACION DE LA BASE DE DATOS
    DATABASE_TYPE : 'postgres',
    DATABASE_HOST : 'localhost',
    DATABASE_PORT : '5432',
    DATABASE_USERNAME : 'postgres',
    DATABASE_PASSWORD : 'postgres',
    DATABASE_NAME : 'postgres',

    //CLAVE SECRETA
    JWT_SECRET : 'algunaclave',

    //COMPANY
    COMPANY:'EMPRESA',
    COMPANY_CODE:'EMP',

    //USUARIO ADMINISTRADOR
    ADMIN_USER : 'default',
    ADMIN_USER_EMAIL : 'default@mail.com',
    ADMIN_USER_PASSWORD : 'secret',

    //RUTAS
    PATH_ROOT_STORAGE : joinPathFolder(PATH_API,'storage'),

    //USUARIO MAIL ADMINISTRADOR
    MAIL_HOST : 'smtp.mail.com',
    MAIL_PORT : '12220',
    MAIL_USER : 'admin',
    MAIL_USER_EMAIL : 'admin@admin.com',
    MAIL_USER_PASSWORD : 'secret',

    //CORS
    CORS_WHITELIST : '',
}