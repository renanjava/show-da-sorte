import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
  providers: [UsuarioController, UsuarioService],
})
export class UsuarioModule {}
