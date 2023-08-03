import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { userDTO } from './user.dto';
import { Body, Param } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post()
    async createUser(@Body() userDTO: userDTO){
        this.userService.addUser(userDTO);
        console.log(userDTO);
        console.log(this.userService.addUser(userDTO));
        return 'create user success';
    }

    @Get()
    findUser(userId: number){
        return this.userService.findUser(userId);
    }

    @Put()
    updateUser(userId:number, @Body() userDTO: userDTO){
        this.userService.updateUser(userId, userDTO);
        return `updated user with id ${userId}`
    }

    @Delete()
    async deleteUser(@Param('email') email: string){
        this.userService.deleteUser(email);
        console.log(email);
        return `deleted user with id ${+email}`
    }
}
