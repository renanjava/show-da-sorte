import { Document } from "mongoose";

export class Usuario extends Document{
    email: string | undefined;
    name: string | undefined;
    password: string | undefined;
    cargo: string | undefined;
}