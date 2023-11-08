import { NewUserDto } from 'src/dto/user.dto';
import { PrismaService } from '../services/prisma.service';
import { Body, Controller, Post } from "@nestjs/common";
import { User } from '@prisma/client';


@Controller("user")
export class UserController {
    constructor(
        private readonly prisma: PrismaService,
    ) {
    }

    @Post()
    async create(@Body() newUser: NewUserDto): Promise<User> {
        try {
            const user = await this.prisma.user.create({
                data: {
                    Email: newUser.Email,
                    FirstName: newUser.FirstName,
                    LastName: newUser.LastName,
                },
            });
            return user;
        }
        catch (error) {
            console.log(error)
        }

    }
}