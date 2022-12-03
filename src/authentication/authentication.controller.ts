import { Controller, Post } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { UserService } from 'src/users/users.service';
import { AuthenticationService } from './authentication.service';
import { RegisterDto } from './dto/register.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthenticationService,
  ) {}

  @Post('register')
  async register(registrationData: RegisterDto): Promise<User> {
    const user = await this.authService.Register(registrationData);
    return user;
  }
}
