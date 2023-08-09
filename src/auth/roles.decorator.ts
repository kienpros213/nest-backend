//create @Roles decorator
import { SetMetadata } from "@nestjs/common";
import { Role } from "./role.enum";

export const ROLE_KEYS = 'roles'

//const Roles in a function that take a roles array argurement, and use SetMetadata to set metadata with 'ROLE_KEYS' and roles array argurement
export const Roles = (...roles: Role[]) => SetMetadata(ROLE_KEYS, roles);