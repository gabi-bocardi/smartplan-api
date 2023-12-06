import { NewUserDto } from '../dto/user.dto';
import { PrismaService } from '../services/prisma.service';
import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
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
            throw new BadRequestException(error)
        }

    }
}