import { Document } from "mongoose";

export class Usuario extends Document{
    email: string;
    name: string;
    password: string;
    role: string;
    phone: string;
}