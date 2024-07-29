import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from 'src/dto/create-user-dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  async createUser(userData: CreateUserDto) {
    const createdUser = await this.userRepository.create(userData);
    return createdUser;
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }
}
