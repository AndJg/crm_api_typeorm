import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/users/users.entity';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async Register(registrationData: RegisterDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);

    try {
      const createdUser = await this.userService.create({
        ...registrationData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.userService.getByEmail(email);
      return await this.verifyPassword(password, user.password);
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }

  async loginWithCredentials(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
