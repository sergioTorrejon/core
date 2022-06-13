import { getRepository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Role } from 'src/constants/enums';
import { User } from 'src/modules/schemas/user/entities';
import { ENV } from 'src/config/config';



const setDefaultUser = async (config: ConfigService) => {
  const userRepository = getRepository<User>(User);
  const defaultUser = await userRepository
    .createQueryBuilder()
    .where('username = :username', {
      username: ENV.ADMIN_USER,
    })
    .getOne();

  if (!defaultUser) {
    const adminUser = userRepository.create({
      username: ENV.ADMIN_USER,
      email: ENV.ADMIN_USER_EMAIL,
      password: ENV.ADMIN_USER_PASSWORD,
      role: [Role.ADMIN],
    });
    return await userRepository.save(adminUser);
  }
};

export default setDefaultUser; 
