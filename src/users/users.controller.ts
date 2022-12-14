import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.getById(id);
  }

  @Get('email/:email')
  async getOneByEmail(@Param('email') email: string): Promise<User> {
    return await this.userService.getByEmail(email);
  }

  //DELETE THIS! ONLY REGISTER ROUTESSHOULD EXIST!
  @Post('create')
  async create(@Body() data: CreateUserDto): Promise<User> {
    return await this.userService.create(data);
  }

  //CHECK IF EMAIL EXIST IN DATABASE!!

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() data: Partial<UpdateUserDto>) {
    return await this.userService.update(id, data);
  }
}
