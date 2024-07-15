import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token } from './token';

@Injectable()
export class TokenService {
  constructor(@InjectModel('Token') private readonly tokenModel: Model<Token>){}

  async save(hash, email){
    const tokenCreated = new this.tokenModel({hash: hash, email: email})
    tokenCreated.save()
  }
}
