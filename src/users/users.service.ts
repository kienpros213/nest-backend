import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient, Users } from '@prisma/client';
import { User } from './entities/user.entity';

const prisma = new PrismaClient();
@Injectable()
export class UsersService {

  //create user
  async create(createUserDto: CreateUserDto) {
    try{
      await prisma.users.create({
        data: {
          name: createUserDto.name,
          email: createUserDto.email,
          userName: createUserDto.userName,
          password: createUserDto.password
        }
      })
      return 'user added';
    }
    
    catch(error){
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }
  
  //find all users
  findAll() {
    return prisma.users.findMany();
  }

  //find user with id
  findOne(id: number) {
    return prisma.users.findUnique({
      where:{
        id: id
      }
    })
  }

  //find with username
  findUser(userData: User) {
    return prisma.users.findUnique({
      where: {
        userName: userData.userName,
      },
    });
  }

  //update user
  async update(id: number, updateUserDto: UpdateUserDto) {
    await prisma.users.update({
      where:{
        id: id,
      },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        userName: updateUserDto.userName,
        password: updateUserDto.password,
      }
    })

    return `updates a #${id} user`;
  }

  async remove(id: number) {
    await prisma.users.delete({
      where:{
        id: id
      }
    })
    return `removes a #${id} user`;
  }
}
