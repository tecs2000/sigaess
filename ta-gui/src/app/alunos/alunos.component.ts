import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Aluno } from '../../../../common/aluno';
import { AlunoService } from '../aluno.service';
import { LoginService } from '../login.service';

@Component({  
  selector: 'app-root',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  constructor(private _route: Router, private alunoService: AlunoService, private loginService: LoginService) {}

  aluno: Aluno = new Aluno();
  cpfduplicado: boolean = false;

  logarAluno(a: Aluno): void {
    var aluno = new Aluno();
    aluno.nome = "Aluno"
    this.loginService.login(aluno, "Aluno");
    //tela de entrada
    alert("Login efetuado! Seja bem vindo!");
    this._route.navigate(['cadeiras']);
  }
  
  onMove(): void {
    this.cpfduplicado = false;
  }

  ngOnInit(): void {
  }
}