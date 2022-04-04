import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadeira } from '../cadeiras';
import { CadeiraService } from '../cadeiras.service';

@Component({
  selector: 'app-criar-cadeira',
  templateUrl: './criar-cadeira.component.html',
  styleUrls: ['./criar-cadeira.component.css']
})
export class CriarCadeiraComponent implements OnInit {

  constructor(private _route: Router, private cadeirasService: CadeiraService) { }

  cadeira: Cadeira = new Cadeira();
  departamentos: string[] = [];
  mensagem_erro_adicionar: string = "";
  horario: number;
  weekdays: string[] = ["seg", "ter", "qua", "qui", "sex", "sab"];
  horarios: Array<number> = Array(24).fill(0).map((x,i)=>i);;

  criarCadeira(c: Cadeira): void {
    var result_criar = this.cadeirasService.criar(c)
    if (typeof result_criar === "object") {
      this.cadeira = new Cadeira();
      this._route.navigate(['cadeiras'])
    } else {
      this.mensagem_erro_adicionar = result_criar;
    }
  }

  toggleHorario(cadeira: Cadeira, weekday:string, horario: number) {
    if (cadeira.horarios[weekday]) {
      if (cadeira.horarios[weekday].has(horario)) {
        this.removerHorario(cadeira, weekday, horario)
        return
      } else {
        this.addHorario(cadeira, weekday, horario)
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

  onMove(): void {
    this.mensagem_erro_adicionar = "";
  }

  ngOnInit(): void {
    this.departamentos = this.cadeirasService.getDepartamentos()
  }

}
