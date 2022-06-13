import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entities';
import { UserCreateDto, UserUpdateDto } from './dtos';
import { responseError, responseSuccess } from 'src/services/res/res.config';
import { resMsg, Status } from 'src/constants/enums';
import { PaginationDto } from 'src/common/dtos';

export interface UserFindOne {
  id?: string;
  username?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {
  }

//#region FUNCIONES PARA AUTHENTICATION NO TOCAR
  async getOneId(id: string, userEntity?: User) {
    const user = await this.repository
      .findOne({ id: id })
      .then(u => (!userEntity ? u : !!u && userEntity.id === u.id ? u : null));
    if (!user)
      throw new NotFoundException('User does not exist or unauthorized!!!!!');
    return user;
  }

  //SEARCH FOR AUTHENTICATION
  async findOne(data: UserFindOne) {
    return await this.repository
      .createQueryBuilder('user')
      .where(data)
      .addSelect('user.password')
      .getOne();
  }
//#endregion


//#region CRUD SERVICES
  async getMany(pag: PaginationDto) {
    const data = await this.repository.find(
      { where: { status:Status.ACTIVE }, skip: (pag.page-1)*pag.limit, take: pag.limit}
      );
    const count = await this.repository.count({where: {status:Status.ACTIVE}})
    return await responseSuccess(resMsg.GET_SUCCESS,{data:data,count:count});
  }

  async getOne(id: string)  {
    const data  = await this.repository.findOne({ id: id , status:Status.ACTIVE })
    if (!data)
      return await responseError(resMsg.GET_ERROR,resMsg.NOTFOUND);

    return await responseSuccess(resMsg.GET_SUCCESS,data);
  }

  async createOne(dto: UserCreateDto, {userCreate,...rest}: User) {
    const getOne = await this.repository.findOne({username: dto.username, status: Status.ACTIVE });
    if (getOne) throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN);
      
    //return await responseError(POST_ERROR,UNIQUE);
 
    const create = this.repository.create({userCreate,...dto});
    const {username,...data} = await this.repository.save(create);
    return await responseSuccess(resMsg.POST_SUCCESS,{username});
  }

  async editOne(id: string, dto: UserUpdateDto, {userUpdate, ...rest}: User) {
    const getOne = await this.repository.findOne({ id: id , status:Status.ACTIVE})
    if (!getOne)
      return await responseError(resMsg.PUT_ERROR,resMsg.NOTFOUND);
    const edited = Object.assign(getOne, {userUpdate,...dto,username:''});
    const {username,...data} = await this.repository.save(edited);
    return await responseSuccess(resMsg.PUT_SUCCESS,{username});
  }

  async deleteOne(id: string, {userUpdate, ...rest}: User) {
    const getOne = await this.repository.findOne({ id: id , status:Status.ACTIVE})
    if (!getOne)
      return await responseError(resMsg.DELETE_ERROR,resMsg.NOTFOUND);
    const {username,...data} = await this.repository.save({userUpdate,...getOne,status:Status.INACTIVE});
    return await responseSuccess(resMsg.DELETE_SUCCESS,{username});
  }
//#endregion

}
