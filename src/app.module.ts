import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/rifas-charamba'),
    UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
