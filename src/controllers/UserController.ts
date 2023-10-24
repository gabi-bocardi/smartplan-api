import { PrismaService } from './../services/prisma.service';
import { Controller, Post } from "@nestjs/common";
import { User } from "@prisma/client";

type newUser = Omit<User, 'CreateAt' | 'AuthToken'> & { Password: string, ConfirmPassword: string}
@Controller("user")
export class UserController {
    constructor(
        private readonly prisma : PrismaService
    ) {}

    @Post()
    async create(newUser: newUser): Promise<string> {
        console.log(newUser);
        return "This action adds a new user";
    }
}