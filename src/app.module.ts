import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/rifas-charamba'),
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
