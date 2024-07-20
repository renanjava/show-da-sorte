import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token } from './token';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { TokenError } from 'src/exceptions/token-error';
import Cookies from 'js-cookie'

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token') private readonly tokenModel: Model<Token>,
    private usuarioService: UsuarioService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
    private jwtService: JwtService
  ){}

  async save(hash, email){
    let buscarToken = await this.tokenModel.findOne({email: email})
    if(buscarToken){
      await this.tokenModel.updateOne({ _id: buscarToken._id } ,{hash: hash})
    }else{
      const tokenCreated = new this.tokenModel({hash: hash, email: email})
      tokenCreated.save()
    }  
  }

  async refreshToken(oldToken: string){
    let buscarToken = await this.tokenModel.findOne({hash: oldToken})
    if(buscarToken){
      let usuario = await this.usuarioService.findEmail(buscarToken.email)
      return this.authService.login(usuario)
    }else
      return new HttpException({
        errorMessage: 'Token Inválido',
      }, HttpStatus.UNAUTHORIZED);
    
  }

  async validarToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token)
      if(!decoded)
        throw new DOMException();
      return decoded
    } catch (err) {
        let buscarToken = await this.tokenModel.findOne({hash: token})
        if(buscarToken)
          return new TokenError("EXPIRED_TOKEN","Token expirado")
        else
          return new TokenError("INVALID_TOKEN","Token inválido")
    }
  }
}
