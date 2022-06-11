import { getRepository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { DEFAULT_USER, DEFAULT_USER_EMAIL, DEFAULT_USER_PASSWORD } from '../../../../configuration/service/config.keys';
import { Role } from 'src/constants/enums';
import { User } from 'src/modules/schemas/user/entities';


const setDefaultUser = async (config: ConfigService) => {
  const userRepository = getRepository<User>(User);
  const defaultUser = await userRepository
    .createQueryBuilder()
    .where('username = :username', {
      username: config.get<string>(DEFAULT_USER),
    })
    .getOne();

  if (!defaultUser) {
    const adminUser = userRepository.create({
      username: config.get<string>(DEFAULT_USER),
      email: config.get<string>(DEFAULT_USER_EMAIL),
      password: config.get<string>(DEFAULT_USER_PASSWORD),
      role: [Role.ADMIN],
    });
    return await userRepository.save(adminUser);
  }
};

export default setDefaultUser; 
