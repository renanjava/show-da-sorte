import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsOptional } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsOptional()
    email: string;

    @IsOptional()
    name: string;

    @IsOptional()
    password: string;

    @IsOptional()
    phone: string;
}
