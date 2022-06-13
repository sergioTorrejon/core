import { DatabaseType } from "typeorm/driver/types/DatabaseType";
import { ENV } from "../../config/config";

export const DATABASE_CONFIG = {
    env:ENV.NODE_ENV,
    server_port:+ENV.SERVER_PORT,
    ssl: false,
    type: ENV.DATABASE_TYPE as DatabaseType,
    host: ENV.DATABASE_HOST,
    username: ENV.DATABASE_USERNAME,
    password: ENV.DATABASE_PASSWORD,
    database: ENV.DATABASE_NAME,
    port: +ENV.DATABASE_PORT,
};