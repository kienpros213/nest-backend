import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService){}

    async signIn(userName: string, password: string){
        const userData = await this.userService.findUser(userName)
        if(userData?.password !== password){
            console.log('login failed')
            throw new UnauthorizedException();
        }
        console.log('login success')
    }
}
