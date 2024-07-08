import * as mongoose from "mongoose";

export const UsuarioSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    cargo: String
})