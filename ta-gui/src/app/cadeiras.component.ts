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
  
  cadeiras: Cadeira[];
  departamentos: string[];
  
  ngOnInit(): void {
    this.cadeiras = this.cadeirasService.getCadeiras();
    this.departamentos = this.cadeirasService.getDepartamentos();
  }

  getTableLine(k: string): Cadeira[]{
    return this.cadeirasService.getCadeiras(k);
  }
}