import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pessoa } from '../../../../common/pessoa';
import { fbAuth } from '../auth/auth'

@Component({  
  selector: 'app-root',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  constructor(private _route: Router, private autorizador: fbAuth) {}

  pessoa: Pessoa = new Pessoa();

  logar(a: Pessoa) {
    var result = this.autorizador.login(a.email, a.senha); 
    if (result == 'success') {
      alert("Login efetuado! Seja bem vindo!");
      this._route.navigate(['cadeiras']);
    } else {
      alert("Falhas nas credenciais, tente novamente");
    }
  }

  ngOnInit(): void {
  }
}