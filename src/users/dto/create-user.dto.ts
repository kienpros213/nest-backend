import { RoleUser } from "@prisma/client"
import { Role } from "src/auth/role.enum"

export class CreateUserDto {
    name: string
    email: string
    userName: string
    password: string
    role: Role[]
}
