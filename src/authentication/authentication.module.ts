import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [UserModule],
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}