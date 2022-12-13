import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
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

  async create(user: CreateUserDto): Promise<User> {
    const createUser = this.userRepository.create(user);
    return await this.userRepository.save(createUser);
  }
}
