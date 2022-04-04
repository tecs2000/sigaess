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

  ngOnInit(): void {
    this.cadeiras = this.cadeirasService.getCadeiras();
  }
}