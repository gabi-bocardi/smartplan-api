import { PrismaClient } from "@prisma/client";

export default async function user() {
    const prisma = new PrismaClient();
    await prisma.user.create({
        data: {
            FirstName: 'Admin',
            LastName: 'Admin',
            Email: 'admin@localhost',
            Password: 'admin',
            CreatedAt: new Date(),
        },
    });
    await prisma.category.createMany({});
}