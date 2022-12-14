import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { User } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //TODO: STOP RETURIING USER OBJECT WITH PASSWORD
  async getByEmail(email: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (user) {
      return user;
    }

    throw new BadRequestException('User with this email does not exist');
  }

  //TODO: STOP RETURIING USER OBJECT WITH PASSWORD
  async getByUsername(username: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { name: username },
    });
    if (user) {
      return user;
    }
    throw new BadRequestException('User does not exist');
  }

  async getById(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (user) {
      return user;
    }
    throw new BadRequestException('User does not exist');
  }
  //DELETE THIS! ONLY REGISTER ROUTESSHOULD EXIWST!
  async create(data: CreateUserDto): Promise<User> {
    const createUser = this.userRepository.create(data);
    return await this.userRepository.save(createUser);
  }

  async update(id: number, data: Partial<UpdateUserDto>): Promise<User> {
    await this.userRepository.update({ id }, data);
    return await this.userRepository.findOneBy({ id });
  }
}
