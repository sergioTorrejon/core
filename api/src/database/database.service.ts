import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfBD } from 'src/database/orm/orm.config';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    async useFactory() {
       
      return ConnectionOptions
    },
  }),
];