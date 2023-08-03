import { Injectable } from '@nestjs/common';
import {User} from './user.interface'
import { PrismaClient } from '@prisma/client';
import { userDTO } from './user.dto';

const prisma = new PrismaClient();
@Injectable()
export class UsersService {
    private readonly user: User[] = [];

//add user
    async addUser(userDTO: userDTO){
        await prisma.user.create({
            data: {
              name: userDTO.name,
              email: userDTO.email,
              userName: userDTO.userName,
              password: userDTO.password,
            },
          })
    }
//find all users
    async findUser(){
        await prisma.user.findMany()
    }

//delete user
    async deleteUser(){
        await prisma.user.delete({
            where: {
                id: 1,
            }
        })
    }
//update user
    async updateUser(){
        await prisma.user.update({
            where: {
                id: 1,
              },
              data: {
                name: 'Viola the Magnificent',
              },
        })
    }
}
