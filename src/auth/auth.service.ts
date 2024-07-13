import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ){}

    async validarUsuario(email: string, senha: string): Promise<any> {
        const usuario = await this.usuarioService.findEmail(email);
        if (usuario && bcrypt.compareSync(senha, usuario.password)) {
            const { password, ...result } = usuario;
            return result;
        }
        return null;
      }
    
      async login(usuario: any){
        const payload = { username: usuario.username, sub: usuario.userId };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
}
