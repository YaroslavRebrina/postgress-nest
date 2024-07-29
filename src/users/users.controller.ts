import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    try {
      return this.userService.getAllUsers();
    } catch (error) {
      return { data: error.toString() };
    }
  }

  @Post()
  create(@Body() userData: CreateUserDto) {
    try {
      return this.userService.createUser(userData);
    } catch (error) {
      return { data: error.toString() };
    }
  }
}
