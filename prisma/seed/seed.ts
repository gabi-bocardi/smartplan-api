import { PrismaClient } from "@prisma/client";
import user from "./user";

export async function seed() {
    await user();
}