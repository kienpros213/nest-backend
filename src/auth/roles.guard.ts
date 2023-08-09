import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "./role.enum";
import { ROLE_KEYS } from "./roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private refletor: Reflector){}

    canActivate(context: ExecutionContext): boolean {
        const requireRoles = this.refletor.getAllAndOverride<Role[]>(ROLE_KEYS, [
            context.getHandler(),
            context.getClass()
        ]);
        if(!requireRoles){
            return true
        }
        const {user} = context.switchToHttp().getRequest();
        return requireRoles.some((role) => user.roles?.include(role))
    }
}