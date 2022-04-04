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
  nome_disciplina_duplicado: boolean = false;

  criarCadeira(c: Cadeira): void {
    if (this.cadeirasService.criar(c)) {
      this.cadeira = new Cadeira();
      this._route.navigate(['cadeiras'])
    } else {
      this.nome_disciplina_duplicado = true;
    }
  }

  onMove(): void {
    this.nome_disciplina_duplicado = false;
  }

  ngOnInit(): void {
  }

}
