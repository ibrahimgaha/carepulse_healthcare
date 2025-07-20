import { Client, Databases, Storage, Messaging, Users } from "node-appwrite";

export const PROJECT_ID = process.env.PROJECT_ID;
export const API_KEY = process.env.API_KEY;
export const DATABASE_ID = process.env.DATABASE_ID;
export const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID;
export const DOCTOR_COLLECTION_ID = process.env.DOCTOR_COLLECTION_ID;
export const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;
export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

// Validate required environment variables
if (!PROJECT_ID || !API_KEY || !DATABASE_ID || !ENDPOINT) {
    console.error("Environment variables:", {
        PROJECT_ID: !!PROJECT_ID,
        API_KEY: !!API_KEY,
        DATABASE_ID: !!DATABASE_ID,
        ENDPOINT: !!ENDPOINT
    });
    throw new Error("Missing required environment variables for Appwrite configuration");
}

const client = new Client();
client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

export const databases = new Databases(client);
export const storage = new Storage(client);
export const messaging = new Messaging(client);
export const users = new Users(client);
