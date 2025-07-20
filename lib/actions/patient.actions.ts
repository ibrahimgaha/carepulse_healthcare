"use server";

import { ID, Query } from "node-appwrite"
import { users } from "../appwrite.config"

export interface CreateUserParams {
  username: string;
  email: string;
  phone: string;
}

export const createUser = async (user: CreateUserParams) => {
    try {
        // Create user using Appwrite Users API
        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.username
        );

        return newUser;
    } catch (error: unknown) {
        if (error && typeof error === 'object' && 'code' in error && (error as { code: number }).code === 409) {
            // User already exists, try to find them
            const existingUsers = await users.list([
                Query.equal("email", [user.email])
            ]);
            return existingUsers?.users[0];
        }
        console.error("Error creating user:", error);
        throw error;
    }
};