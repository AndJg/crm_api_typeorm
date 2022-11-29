import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(3)
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @IsOptional()
  password: string;
}
