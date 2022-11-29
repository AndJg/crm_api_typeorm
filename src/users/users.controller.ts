import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/createUserDto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getById(id);
  }

  @Get()
  async getOneByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.getByEmail(email);
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user);
  }
}
