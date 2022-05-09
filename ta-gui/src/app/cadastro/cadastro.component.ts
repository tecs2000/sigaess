import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { Pessoa } from '../../../../common/pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor(private _route: Router, private pessoaService: PessoaService) {}

  pessoa: Pessoa = new Pessoa();

  criarPessoa(a: Pessoa): void {
    if (this.pessoaService.criar(a)) {
      this.pessoa = new Pessoa();
      alert("Cadastro realizado. Faça Login.")
      this._route.navigate(['professores']);
    } else {
      alert("Esse CPF já foi cadastrado. Tente Novamente")
    }
  }

  ngOnInit(): void {
  }

}
