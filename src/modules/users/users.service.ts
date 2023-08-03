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
    async findUser(userId: number){
        return prisma.user.findUnique({
            where: {
                id: userId
            }
        })
    }

//delete user
    async deleteUser(email: string){
         prisma.user.delete({
            where: {
                email: email,
            }
        })
    }
//update user
    updateUser(userId: number, userData: userDTO){
        prisma.user.update({
            where: {
                id: userId,
              },
              data: {
                name: userData.name,
                email: userData.email,
                userName: userData.userName,
                password: userData.password,
              },
        })
    }
}
