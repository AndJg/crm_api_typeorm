
import {
  IsNotEmpty,
  IsEmail,
  MaxLength,
  MinLength,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
