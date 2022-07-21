import client from "../config/database.js";
import { User } from "@prisma/client";

export type UserInsertData = Omit<User, "id" | "createdAt">;

export async function insert(userData: UserInsertData) {
    const { email, password } = userData;

    await client.user.create({
        data: {
            email,
            password
        }
    });
}

export async function getEmail(email: string) {
    return await client.user.findFirst({
        where: {
            email
        }
    });
}