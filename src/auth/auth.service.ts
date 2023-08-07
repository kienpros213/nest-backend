import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
        ){}

    async signIn(userName: string, password: string){
        const userData = await this.userService.findUser(userName)
        if(userData?.password !== password){
            console.log('login failed')
            throw new UnauthorizedException();
        }
        const payload = { sub: userData.id, username: userData.userName };
        const access_token = await this.jwtService.signAsync(payload)
        console.log(payload)
        return {
          access_token
        }
    }
}
