import * as mongoose from "mongoose";

export const UsuarioSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    role: String,
    phone: String
})

export const User = mongoose.model('User', UsuarioSchema);