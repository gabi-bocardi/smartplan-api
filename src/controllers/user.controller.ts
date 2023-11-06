import { AuthService } from './../services/auth.service';
import { NewUserDto } from 'src/dto/user.dto';
import { PrismaService } from '../services/prisma.service';
import { Body, Controller, Post } from "@nestjs/common";
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import { User } from '@prisma/client';
import { Auth } from 'firebase-admin/lib/auth/auth';


@Controller("user")
export class UserController {
    constructor(
        private readonly prisma: PrismaService,
        private readonly authService: AuthService,
    ) {
    }

    @Post()
    async create(@Body() newUser: NewUserDto): Promise<User> {
        try {
            const userCredential = await this.authService.createFirebaseUser(newUser.Email, newUser.Password);
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