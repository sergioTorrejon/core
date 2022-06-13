import * as dotenv from 'dotenv';
import { ENV } from 'src/config/config';
import { Environment } from 'src/constants/enums';
import { DATABASE_CONFIG } from '../config/database.config';
dotenv.config();

export const TYPEORM_CONFIG = {
    ...DATABASE_CONFIG,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    logging: true,
    logger: 'file',
    autoLoadEntities: true,
    synchronize: ENV.NODE_ENV===Environment.Development,
};