//CONFIGURACION DE VARIABLES POR DEFECTO
export const DEFAULT_ENV=
{
    NODE_ENV:'development', //AMBIENTE POR DEFECTO DESARROLLO

    SERVER_PORT:3000, //PUERTO DE ARRANQUE DEL SERVIDOR POR DEFECTO 3000

    DATABASE_TYPE : 'postgres',
    DATABASE_HOST : 'localhost',
    DATABASE_PORT : '5432',
    DATABASE_USERNAME : 'postgres',
    DATABASE_PASSWORD : 'postgres',
    DATABASE_NAME : 'postgres',


    JWT_SECRET : 'algunaclave',
    
    DEFAULT_USER : 'admin',
    DEFAULT_USER_EMAIL : 'admin@admin.com',
    DEFAULT_USER_PASSWORD : 'secret',
    
    PATH_API_FILES : process.cwd(),
    
    CORS_WHITELIST : '',
}