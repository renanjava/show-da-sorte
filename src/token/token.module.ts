import { forwardRef, Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenSchema } from './token.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Token', schema: TokenSchema}]), forwardRef(() => AuthModule)],
  controllers: [],
  providers: [TokenService],
  exports: [TokenService]
})
export class TokenModule {}
