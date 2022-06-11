import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfBD } from 'src/database/orm/orm.config';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    async useFactory() {
      const ConnectionOptions =await ConfBD() as ConnectionOptions;
      return ConnectionOptions
    },
  }),
];