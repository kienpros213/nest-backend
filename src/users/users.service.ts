import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class UsersService {

  //create user
  async create(createUserDto: CreateUserDto) {
    await prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        userName: createUserDto.userName,
        password: createUserDto.password
      }
    })
    return 'This action adds a new user';
  }
  
  //find all users
  findAll() {
    return prisma.user.findMany();
  }

  //find user with id
  findOne(id: number) {
    return prisma.user.findUnique({
      where:{
        id: id
      }
    })
  }

  //find with username
  findUser(userName: string) {
    return prisma.user.findUnique({
      where:{
        userName: userName
      }
    })
  }

  //update user
  async update(id: number, updateUserDto: UpdateUserDto) {
    await prisma.user.update({
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

    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    await prisma.user.delete({
      where:{
        id: id
      }
    })
    return `This action removes a #${id} user`;
  }
}
