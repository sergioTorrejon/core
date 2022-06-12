import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Query,
  Logger,
  HttpException,
  HttpStatus,
  UseFilters,
  
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';


import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from './dtos';
import { RoleSupervisorGuard } from 'src/core/auth/guards/role-supervisor.guard';
import { RoleConsultaGuard } from 'src/core/auth/guards/role-consulta.guard';
import { RoleAdminGuard } from 'src/core/auth/guards/role-admin.guard';
import { PaginationDto } from 'src/common/dtos';
import { Auth, User } from 'src/common/decorators';
import { AppLogger } from 'src/core/logger/logger.service';

@ApiTags('User')
@Controller('user')
//@UseFilters(new HttpExceptionFilter())
export class UserController {
  constructor(
    private readonly service: UserService,
    private readonly loggerService: AppLogger
  ) { 
      this.loggerService.setContext(UserController.name)
  }

  //FUNCIONA!!!!
  @Auth()
  @UseGuards(RoleSupervisorGuard)
  @Get()
  async getMany(@User() user,@Query() pagination: PaginationDto) {
    const response = await this.service.getMany(pagination);
    return response;
  }


  //FUNCIONA!!!!
  @Auth()
  @UseGuards(RoleConsultaGuard)
  @Get(':id')
  async getOne(@User() user,@Param('id') id: string) {
    const response = await this.service.getOne(id);
    return response;
  }

  //FUNCIONA!!!!
  @Auth()
  @UseGuards(RoleAdminGuard)
  @Post()
  async createOne(@Body() dto: UserCreateDto,@User() user) {
    //cl('usercreate',dto)
    const response = await this.service.createOne(dto,user);
    return response;
  }

  //FUNCIONA!!!!
  @Auth()
  @UseGuards(RoleAdminGuard)
  @Put(':id')
  async editOne(@Param('id') id: string, @Body() dto: UserUpdateDto,@User() user) {
    const response = await this.service.editOne(id,dto,user);
    return response;
  }

  //FUNCIONA!!!!
  @Auth()
  @UseGuards(RoleAdminGuard)
  @Delete(':id')
  async deleteOne(@Param('id') id: string, @User() user) {
    const response = await this.service.deleteOne(id, user);
    return response;
  }
}
