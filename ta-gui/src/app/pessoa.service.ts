import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { fbAuth } from './auth/auth';
import { Router } from '@angular/router';

import { Pessoa } from '../../../common/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  constructor(private _route: Router, private autorizador: fbAuth) {}

  criar(a: Pessoa) {
    var result = this.autorizador.createUser(a.email, a.senha, a)
    return result
  }
}
