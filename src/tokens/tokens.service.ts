import { Injectable } from '@nestjs/common';
import { Token, TokenStatus, TokenType } from './tokens.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTokenDto } from './dto/create-token.dto';

@Injectable()
export class TokensService {
  private tokens: Token[] = [];

  getTokens(): Token[] {
    return this.tokens;
  }

  createToken(createTokenDto: CreateTokenDto): Token {
    const { reporter } = createTokenDto;
    const token: Token = {
      id: uuidv4(),
      reporter: reporter,
      type: TokenType.GODWIN,
      status: TokenStatus.NEW,
    };

    this.tokens.push(token);
    return token;
  }
}
