import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
  constructor(private alunoService: PessoaService) {}
  ngOnInit(): void {
    // this.alunos = this.alunoService.getAlunos();
  }

}