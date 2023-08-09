import { Role } from "src/auth/auth.role"

export class CreateUserDto {
    id: number
    name: string
    email: string
    userName: string
    password: string
    userRole: Role[]
}
