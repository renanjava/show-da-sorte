import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@WebSocketGateway()
export class UsuarioGateway {
  constructor(private readonly usuarioService: UsuarioService) {}

  @SubscribeMessage('createUsuario')
  create(@MessageBody() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @SubscribeMessage('findAllUsuario')
  findAll() {
    return this.usuarioService.findAll();
  }

  @SubscribeMessage('findOneUsuario')
  findOne(@MessageBody() id: number) {
    return this.usuarioService.findOne(id);
  }

  @SubscribeMessage('updateUsuario')
  update(@MessageBody() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(updateUsuarioDto.id, updateUsuarioDto);
  }

  @SubscribeMessage('removeUsuario')
  remove(@MessageBody() id: number) {
    return this.usuarioService.remove(id);
  }
}
