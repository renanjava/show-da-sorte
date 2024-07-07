import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioGateway } from './usuario.gateway';
import { UsuarioService } from './usuario.service';

describe('UsuarioGateway', () => {
  let gateway: UsuarioGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioGateway, UsuarioService],
    }).compile();

    gateway = module.get<UsuarioGateway>(UsuarioGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
