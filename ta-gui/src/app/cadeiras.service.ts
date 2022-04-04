import { Injectable } from '@angular/core';

import { Cadeira } from "./cadeiras";

@Injectable()
export class CadeiraService {
  cadeiras: Cadeira[] = [];

  criar(cadeira: Cadeira): Cadeira | null {
    cadeira = cadeira.clone();
    var result = null;
    if (this.cadeiraNaoCadastrada(cadeira.nome_disciplina)) {
      this.cadeiras.push(cadeira);
      result = cadeira;
    }
    return result;
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