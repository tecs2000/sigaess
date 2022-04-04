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
  mensagem_erro_adicionar: string = "";

  criarCadeira(c: Cadeira): void {
    var result_criar = this.cadeirasService.criar(c)
    if (typeof result_criar === "object") {
      this.cadeira = new Cadeira();
      this._route.navigate(['cadeiras'])
    } else {
      this.mensagem_erro_adicionar = result_criar;
    }
  }

  onMove(): void {
    this.mensagem_erro_adicionar = "";
  }

  ngOnInit(): void {
  }

}
