//create @Roles decorator
import { SetMetadata } from "@nestjs/common";
import { Role } from "./role.enum";

export const ROLE_KEYS = 'roles'
export const Roles = (...roles: Role[]) => SetMetadata(ROLE_KEYS, roles);