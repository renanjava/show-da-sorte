import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioGateway } from './usuario.gateway';

@Module({
  providers: [UsuarioGateway, UsuarioService],
})
export class UsuarioModule {}
