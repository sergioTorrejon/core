import * as dotenv from 'dotenv';
dotenv.config();

//ENTORNO DE ARRANQUE DEL SERVIDOR
export const NODE_ENV = 'NODE_ENV';

//PUERTO DE ARRANQUE DEL SERVIDOR
export const SERVER_PORT = 'SERVER_PORT';

//VARIABLES DATABASE
export const DB_TYPE = 'DB_TYPE'
export const DATABASE_HOST = 'DATABASE_HOST';
export const HOST = 'DATABASE_HOST';

export const DATABASE_PORT = 'DATABASE_PORT';
export const DATABASE_USERNAME = 'DATABASE_USERNAME';
export const DATABASE_PASSWORD = 'DATABASE_PASSWORD';
export const DATABASE_NAME ='DATABASE_NAME';

//CLAVE SECRETA 
export const JWT_SECRET = 'JWT_SECRET';

//LISTA CORS ADMITIBLES
export const CORS_WHITELIST = 'CORS_WHITELIST';

//USUARIO OWNER
export const DEFAULT_USER = 'DEFAULT_USER';
export const DEFAULT_USER_EMAIL = 'DEFAULT_USER_EMAIL';
export const DEFAULT_USER_PASSWORD = 'DEFAULT_USER_PASSWORD';