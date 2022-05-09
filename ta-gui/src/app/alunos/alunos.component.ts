import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../../../../common/pessoa';

@Component({  
  selector: 'app-root',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  constructor(private _route: Router, private pessoaService: PessoaService) {}

  aluno: Pessoa = new Pessoa();
  cpfduplicado: boolean = false;

  logarAluno(a: Pessoa): void {
    var aluno = new Pessoa();
    aluno.name = "Aluno"
    aluno.role = "a"
    aluno.email = "ameil@gmail.com"
    this.pessoaService.login(aluno, "Aluno");
    //tela de entrada
    alert("Login efetuado! Seja bem vindo!");
    this._route.navigate(['cadeiras']);
  }


  ngOnInit(): void {
  }
}