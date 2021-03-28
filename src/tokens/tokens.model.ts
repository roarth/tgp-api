export interface Token {
  id: string;
  reporter: string;
  type: TokenType;
  status: TokenStatus;
}

export enum TokenStatus {
  NEW = 'NEW',
  VERIFIED = 'VERIFIED',
}

export enum TokenType {
  GODWIN = 'GODWIN',
}
