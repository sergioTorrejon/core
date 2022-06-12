import * as dotenv from 'dotenv';
import { DATABASE_CONFIG } from 'src/configuration/service/database/database.config';
import { TYPEORM_CONFIG } from 'src/configuration/service/typeorm/typeorm.keys';
import { Environment } from 'src/constants/enums';
dotenv.config();

const Development = () => {
    const DEVELOPMENT_CONFIG = {...DATABASE_CONFIG, ...TYPEORM_CONFIG};
    DEVELOPMENT_CONFIG.env=Environment.Development
    DEVELOPMENT_CONFIG.server_port=3005
    DEVELOPMENT_CONFIG.database=DATABASE_CONFIG.database+'_test'
    DEVELOPMENT_CONFIG.synchronize=true
    return DEVELOPMENT_CONFIG;
};
export default Development; 