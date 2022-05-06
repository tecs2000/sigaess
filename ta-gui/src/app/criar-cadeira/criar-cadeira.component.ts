import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadeira } from '../../../../common/cadeiras';
import { CadeiraService } from '../cadeiras.service';
import { LoginService } from '../login.service';
import { Professor } from '../../../../common/professor';

@Component({
  selector: 'app-criar-cadeira',
  templateUrl: './criar-cadeira.component.html',
  styleUrls: ['./criar-cadeira.component.css']
})
export class CriarCadeiraComponent implements OnInit {
  constructor(private _route: Router, private cadeirasService: CadeiraService, 
    private loginService: LoginService) { }

  professor: Professor;
  cadeira: Cadeira = new Cadeira();
  departamentos: string[] = [];
  horario: number;
  weekdays: string[] = ["seg", "ter", "qua", "qui", "sex", "sab"];
  horarios: Array<number> = Array(24).fill(-1).map((x,i)=>i);

  criarCadeira(c: Cadeira): void {
    console.log(JSON.stringify(c))
    var result_criar = this.cadeirasService.criar(c)
                        .subscribe(
                          ar => {
                            if (ar) {
                              if (typeof ar === "object") {
                                this.cadeira = new Cadeira();
                                this._route.navigate(['cadeiras']);
                              } else 
                                alert(ar)
                            } else {
                              alert("Algo deu errado, tente novamente mais tarde")
                            } 
                          },
                          msg => { alert(msg.message); }
                        );
    
  }

  toggleHorario(cadeira: Cadeira, weekday:string, horario: number) {
    if (cadeira.horarios.get(weekday)) {
      if (cadeira.horarios.get(weekday).has(horario)) {
        this.removerHorario(cadeira, weekday, horario);
        return
      } else {
        this.addHorario(cadeira, weekday, horario);
        return
      }
    }
  }

  addHorario(cadeira: Cadeira, weekday: string, horario: number) {
    cadeira.addHorario(weekday, horario);
  }

  removerHorario(cadeira: Cadeira, weekday: string, horario: number) {
    cadeira.removerHorario(weekday, horario);
  }

  ngOnInit(): void {
    this.cadeirasService.getDepartamentos().subscribe(
      ar => {
        if (ar) {
          this.departamentos = ar;
        }
      },
      msg => { alert(msg.message); }
    );
    this.professor = this.loginService.getAccount();
    if (!this.professor || this.loginService.getType() == "Aluno") {
      this._route.navigate(['professores']);
    }
    this.cadeira.nome_professor = this.professor.nome;
  }

}
