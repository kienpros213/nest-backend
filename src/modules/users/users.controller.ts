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
    }

    @Get()
    async findUser(){
        this.userService.findUser();
    }

    @Put()
    async updateUser(){
        this.userService.updateUser();
    }

    @Delete()
    async deleteUser(){
        this.userService.deleteUser();
    }
}
