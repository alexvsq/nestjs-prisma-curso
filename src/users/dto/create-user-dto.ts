import { IsEmail, IsString, IsNumber, IsNotEmpty, Max } from 'class-validator';

export class createUserDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

}
