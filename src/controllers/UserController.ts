import { NewUserDto } from 'src/dto/user.dto';
import { PrismaService } from './../services/prisma.service';
import { Body, Controller, Post } from "@nestjs/common";


@Controller("user")
export class UserController {
    constructor(
        private readonly prisma : PrismaService
    ) {}

    @Post()
    async create(@Body() newUser: NewUserDto): Promise<string> {
        console.log(newUser);
        return "This action adds a new user";
    }
}