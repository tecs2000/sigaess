import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Pessoa } from '../../../common/pessoa';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _route: Router, private loginService: LoginService) {}

  pessoa: Pessoa = new Pessoa();

  logar(a: Pessoa) {
    //this.loginService.login(pessoa); firebase
    //tela de entrada
    alert("Login efetuado! Seja bem vindo!");
    this._route.navigate(['cadeiras']);
  }

}
