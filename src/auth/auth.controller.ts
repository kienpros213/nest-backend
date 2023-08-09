import { 
    Controller,
    Get,
    Body,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
 } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Roles } from './roles.decorator';
import { Role } from './role.enum';
import { RolesGuard } from './roles.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}
    
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>){
        return this.authService.signIn(signInDto.userName, signInDto.password)
    }

    @Roles(Role.admin)
    @UseGuards(AuthGuard, RolesGuard)
    @Get('profile')
    getProfile(@Request() req){
        console.log(req)
        return req.user;
    }

}
