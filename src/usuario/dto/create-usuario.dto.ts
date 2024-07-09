import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto{

    @IsNotEmpty({message: "Email é obrigatório"})
    @IsEmail({}, {message: "Email deve ser válido"})
    @Matches(/@(hotmail|gmail)\.com$/, { message: 'Email deve ser hotmail.com ou gmail.com' })
    email: string;

    @IsNotEmpty({message: "Nome é obrigatório"})
    @MaxLength(60, {message: "Nome deve ter no máximo 60 caracteres"})
    @MinLength(2, {message: "Nome deve ter no mínimo 2 caracteres"})
    @IsString({message: "Nome não pode ter apenas números"})
    name: string;

    @IsNotEmpty({message: "Senha é obrigatória"})
    @MaxLength(20, {message: "Senha deve ter no máximo 20 caracteres"})
    @MinLength(6, {message: "Senha deve ter no mínimo 6 caracteres"})
    password: string;

    @IsNotEmpty({message: "Cargo é obrigatório"})
    @IsEnum(["usuario", "admin", "dev"],{message: "Cargo deve ser válido"})
    role: string;

    @IsNotEmpty({message: "Número de telefone é obrigatório"})
    @IsPhoneNumber(undefined, {message: "Número de telefone deve ser válido"})
    phone: string;
}
