import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Aluno } from '../../../../common/aluno';

import { Cadeira } from '../../../../common/cadeiras';
import { CadeiraService } from '../cadeiras.service';
import { LoginService } from '../login.service';
import { Professor } from '../../../../common/professor';

@Component({  
  selector: 'cadeiras',
  templateUrl: './cadeiras.component.html',
  styleUrls: ['./cadeiras.component.css']
})
export class CadeirasComponent implements OnInit {
  constructor(private cadeirasService: CadeiraService, private loginService: LoginService) {}
  
  accountType: string;
  account: Aluno | Professor = undefined;
  cadeiras: Cadeira[];
  departamentos: string[];

  weekdays: string[] = ["seg", "ter", "qua", "qui", "sex", "sab"];
  horarios: Array<number> = Array(24).fill(0).map((x,i)=>i);;
  departamento: string;
  nomeCadeira: string;
  cadeira: Cadeira = undefined;

  ngOnInit(): void {
    this.cadeiras = this.cadeirasService.getCadeiras();
    this.cadeirasService.getDepartamentos().subscribe(
      ar => {
        if (ar) {
          this.departamentos = ar;
        }
      },
      msg => { alert(msg.message); }
    );
    this.accountType = this.loginService.getType();
    this.account = this.loginService.getAccount();
  }

  getTableLine(k: string): Cadeira[]{
    if (k) {
      return this.cadeirasService.getCadeiras(k);
    }
    return [];
  }

  loadCadeira(nome: string) {
    for (var i = 0; i < this.cadeiras.length; ++i) {
      if (this.cadeiras[i].nome_disciplina == nome) {
        this.cadeira = this.cadeiras[i].clone();
        return;
      }
    }
  }

  getType(a: any): string {
    return typeof a;
  }

  checkIfAluno(account: Aluno | Professor): boolean {
    if (account instanceof Aluno) {
      return true;
    }
    return false;
  }

  checkIfProf(account: Aluno | Professor): boolean {
    if (account instanceof Professor) {
      return true;
    }
    return false;
  }

  matricula(cadeira: Cadeira, aluno: Aluno | Professor) {
    if (aluno instanceof Aluno) {
      this.cadeirasService.addAluno(cadeira, aluno);
    }
  }
}