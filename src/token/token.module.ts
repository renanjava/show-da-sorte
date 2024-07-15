import { forwardRef, Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenSchema } from './token.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { TokenController } from './token.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthService } from 'src/auth/auth.service';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Token', schema: TokenSchema}]), forwardRef(() => AuthModule), UsuarioModule],
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService]
})
export class TokenModule {}
