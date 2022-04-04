import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Cadeira } from './cadeiras';
import { CadeiraService } from './cadeiras.service';

@Component({  
  selector: 'cadeiras',
  templateUrl: './cadeiras.component.html',
  styleUrls: ['./cadeiras.component.css']
})
export class CadeirasComponent implements OnInit {
  constructor(private cadeirasService: CadeiraService) {}

  cadeira: Cadeira = new Cadeira();
  cadeiras: Cadeira[];
  nome_disciplina_duplicado: boolean = false;

  criarCadeira(c: Cadeira): void {
    if (this.cadeirasService.criar(c)) {
      this.cadeiras.push(c);
      this.cadeira = new Cadeira();
    } else {
      this.nome_disciplina_duplicado = true;
    }
  }

  onMove(): void {
      this.nome_disciplina_duplicado = false;
  }

  ngOnInit(): void {
    this.cadeiras = this.cadeirasService.getCadeiras();
  }
}