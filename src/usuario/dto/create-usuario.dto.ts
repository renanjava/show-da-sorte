import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto{

    @IsNotEmpty({message: "O email é obrigatório"})
    @IsEmail({}, {message: "O email deve ser válido"})
    email: string;

    @IsNotEmpty({message: "O nome é obrigatório"})
    @MaxLength(60, {message: "O nome deve ter no máximo 60 caracteres"})
    @MinLength(2, {message: "O nome deve ter no mínimo 2 caracteres"})
    @IsString({message: "O nome não pode ter apenas números"})
    name: string;

    @IsNotEmpty({message: "A senha é obrigatória"})
    @MaxLength(20, {message: "A senha deve ter no máximo 20 caracteres"})
    @MinLength(6, {message: "A senha deve ter no mínimo 6 caracteres"})
    password: string;

    @IsNotEmpty({message: "O cargo é obrigatório"})
    @IsEnum(["usuario", "admin"],{message: "O cargo deve ser válido"})
    role: string;

    @IsNotEmpty({message: "O número de telefone é obrigatório"})
    @IsPhoneNumber(undefined, {message: "O número de telefone deve ser válido"})
    phone: string;
}
