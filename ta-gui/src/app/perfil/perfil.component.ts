import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Professor } from '../../../../common/professor';
import { Aluno } from '../../../../common/aluno';
import { Cadeira } from '../../../../common/cadeiras';
import { CadeiraService } from '../cadeiras.service';
import { LoginService } from '../login.service';
import { Pessoa } from '../../../../common/pessoa';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private cadeirasService: CadeiraService, private loginService: LoginService) {}
  
  accountType: string;
  account: Professor | Aluno = undefined; //Pessoa = undefined;
  allCadeiras: Cadeira[];
  userCadeiras: Cadeira[];
  weekdays: string[] = ["seg", "ter", "qua", "qui", "sex", "sab"];
  horarios: Array<number> = Array(15).fill(-1).map((x,i)=>i+8);
  nomeCadeira: string;
  cadeira: Cadeira = undefined;

  ngOnInit(): void {
    //this.cadeiras = this.cadeirasService.getCadeirasOfUser(); //uma função que retorna um array de cadeiras contendo
    this.accountType = this.loginService.getType();//firebase           //os objetos cadeira que o aluno tá matriculado
    this.account = this.loginService.getAccount();//firebase            //ou que o professor leciona (atributo cadeiras de pessoa?)
    this.allCadeiras = this.cadeirasService.getCadeiras(); //isso aqui tá dando ruim
    this.userCadeiras = this.loadUserCadeiras();
  }

  loadCadeira(nome: string) {
    for (var i = 0; i < this.allCadeiras.length; ++i) {
      if (this.allCadeiras[i].nome_disciplina == nome) {
        this.cadeira = this.allCadeiras[i].clone();
        return;
      }
    }
  }

  loadUserCadeiras(): Cadeira[] {
    console.log(this.allCadeiras)
    var result: Cadeira[] = [];
    for (var i = 0; i < this.allCadeiras.length; ++i) {
      console.log(this.allCadeiras[i]);
      if (this.allCadeiras[i].nome_professor == 'Professor') {
        result.push(this.allCadeiras[i].clone());
      }
    }
    console.log(result);
    return result;
  }

}

