import { Injectable } from '@angular/core';

import { Cadeira } from "./cadeiras";

@Injectable()
export class CadeiraService {
  cadeiras: Cadeira[] = [];

  criar(cadeira: Cadeira): Cadeira | string {
    cadeira = cadeira.clone();
    var result: Cadeira | string = "Erro";
    if (this.checkCriar(cadeira)) {
      this.cadeiras.push(cadeira);
      result = cadeira;
    }
    return result;
  }
  
  checkCriar(cadeira: Cadeira): boolean {
    if (!this.cadeiraNaoCadastrada(cadeira.nome_disciplina)) {
      return false
    }
    return true
  }
  
  cadeiraNaoCadastrada(nome_disciplina: string): boolean {
    return !this.cadeiras.find(a => a.nome_disciplina == nome_disciplina);
  }

  atualizarAlunos(cadeira: Cadeira): void {
    cadeira = cadeira.clone();
    for (let c of this.cadeiras)
      if (c.nome_disciplina == cadeira.nome_disciplina) {
        c.alunos = cadeira.alunos;
      }
  }

  getCadeiras(): Cadeira[] {
    var result: Cadeira[] = [];
    for (let c of this.cadeiras) {
        result.push(c.clone());
    }
    return result;
  }
}