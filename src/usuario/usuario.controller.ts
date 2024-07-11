import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async createUser(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = await this.usuarioService.create(createUsuarioDto);
      return { message: 'Usuário criado com sucesso', usuario };
    } catch (error) {
      if (error.code === 11000) {
        console.log(error.errmsg)
        const message = [`${this.usuarioService.extractDuplicateKey(error.errmsg)} já está em uso.`];
        throw new HttpException(
          {
            message: message,
            error: 'Bad Request',
            statusCode: HttpStatus.BAD_REQUEST,
          },
          HttpStatus.BAD_REQUEST
        );
      }
    }
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Get('custom/:value')
  findByCustom(column: string, @Param('value') value: string) {
    return this.usuarioService.findByCustom(column, value);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }

}
