import * as dotenv from 'dotenv';
import { DATABASE_CONFIG } from 'src/configuration/service/database/database.config';
import { TYPEORM_CONFIG } from 'src/configuration/service/database/typeorm/typeorm.keys';
import { Environment } from 'src/constants/enums';

dotenv.config();

const Production = () => {
    const PRODUCTION_CONFIG = {...DATABASE_CONFIG, ...TYPEORM_CONFIG};
    PRODUCTION_CONFIG.env=Environment.Production
    return PRODUCTION_CONFIG;
};
export default Production; 