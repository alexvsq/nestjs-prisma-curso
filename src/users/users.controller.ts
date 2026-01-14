import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiTags('Users')
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @ApiTags('Users')
  @Post()
  createUser(@Body() user: createUserDto) {
    return this.usersService.createUser(user);
  }
}
