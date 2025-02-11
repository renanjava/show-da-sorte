import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './usuario';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsuarioService {
  constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>){}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const createdUsuario = new this.usuarioModel({...createUsuarioDto, password:`${bcrypt.hashSync(createUsuarioDto.password, 8)}`})
    return await createdUsuario.save()
  }

  async findAll() {
    return await this.usuarioModel.find().exec()
  }

  async findOne(id: string) {
    return await this.usuarioModel.findById(id).exec()
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuarioModel.updateOne({ _id: id }, updateUsuarioDto).exec()
    return this.findOne(id)
  }

  async remove(id: string) {
    return await this.usuarioModel.deleteOne({ _id: id }).exec()
  }

  async findByCustom(column: string, value: string){
    return await this.usuarioModel.findOne({ [column]: value }).exec();
  }

  async findEmail(email: string) {
    return this.usuarioModel.findOne({email: email});
  }
  
}
