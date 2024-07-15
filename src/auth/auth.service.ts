import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private tokenService: TokenService
    ){}

  async validarUsuario(email: string, senha: string): Promise<any> {
      const usuario = await this.usuarioService.findEmail(email);
      if (usuario && bcrypt.compareSync(senha, usuario.password)) {
          const { password, ...result } = usuario;
          return result;
      }
      return null;
  }
  
    async login(usuario){
      const payload = { username: usuario.email};
      const token = this.jwtService.sign(payload)
      await this.tokenService.save(token, usuario.email)
      return {
        access_token: token
      };
  }
}
