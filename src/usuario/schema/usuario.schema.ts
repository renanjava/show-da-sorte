import * as mongoose from "mongoose";

export const UsuarioSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    phone: {type: String, required: true, unique: true}
})

export const User = mongoose.model('usuarios', UsuarioSchema);