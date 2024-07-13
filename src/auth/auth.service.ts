import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuarioService){}

    async signIn(email: string, senha: string): Promise<any> {
        const usuario = await this.usuarioService.findEmail(email);
        if (usuario && bcrypt.compareSync(senha, usuario.password)) {
            const { password, ...result } = usuario;
            return result;
        }
        return null;
      }
}
