import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Professor } from '../../../../common/professor';
import { ProfService } from '../prof.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'professores',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
   constructor(private _route: Router, private profService: ProfService, private loginService: LoginService) {}

   prof: Professor = new Professor();
   cpfduplicado: boolean = false;

  logarProf(a: Professor): void {
    this.loginService.login(this.prof , "Professor");
    //tela de entrada
    alert("Login efetuado! Seja bem vindo!");
    this._route.navigate(['cadeiras']);
  }

   onMove(): void {
      this.cpfduplicado = false;
   }

   ngOnInit(): void {
   }

}
