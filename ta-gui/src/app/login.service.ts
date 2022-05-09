import { Injectable } from '@angular/core';
import { Pessoa } from '../../../common/pessoa';

@Injectable()
export class LoginService {
  type: string = '';
  account: Pessoa = undefined;

  login(account: Pessoa, type: string) {
    this.account = account;
    this.type = type;
  }

  getType(): string {
    return this.type;
  }

  getAccount(): Pessoa | null {
    return this.account;
  }
}
