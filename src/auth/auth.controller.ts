import { Controller, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity'

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Get()
    signIn(@Body() user: User){
        this.authService.signIn(user.userName, user.password)
    }

}
