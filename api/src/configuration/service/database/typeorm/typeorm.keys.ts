import * as dotenv from 'dotenv';
dotenv.config();

export const TYPEORM_CONFIG = {
    env:'',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    logging: true,
    logger: 'file',
    autoLoadEntities: true,
    synchronize: false,
};