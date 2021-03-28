import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateTokenDto } from './dto/create-token.dto';
import { Token } from './tokens.model';
import { TokensService } from './tokens.service';

@Controller('tokens')
@ApiTags('tokens')
export class TokensController {
  constructor(private tokensService: TokensService) {}

  @Get()
  getTokens(): Token[] {
    return this.tokensService.getTokens();
  }

  @Post()
  createToken(@Body() createTokenDto: CreateTokenDto): Token {
    return this.tokensService.createToken(createTokenDto);
  }
}
