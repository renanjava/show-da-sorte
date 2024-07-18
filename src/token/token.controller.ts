import { Body, Controller, Post, Put } from "@nestjs/common";
import { TokenService } from "./token.service";
import { RefreshTokenDto } from "./dto/refresh.token.dto";
import { ValidateTokenDto } from "./dto/validate.token.dto";

@Controller('token')
export class TokenController {
  constructor(
    private tokenService: TokenService
  ) {}

  @Put('refresh')
  async refreshToken(@Body() body: RefreshTokenDto){
    return this.tokenService.refreshToken(body.oldToken)
  }

  @Post('validate')
  async validate(@Body() body: ValidateTokenDto){
    return this.tokenService.validarToken(body.token)
  }

}
