import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/users.entity';
import { UserService } from 'src/users/users.service';
import { AuthenticationService } from './authentication.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthenticationService,
  ) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto): Promise<User> {
    return await this.authService.Register(registrationData);
  }

  @Post('login')
  signin(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  //   @UseGuards(AuthGuard('local'))
  //   @Post('login')
  //   async login(@Req() req) {
  //     return this.authService.loginWithCredentials(req.user);
  //   }
}
