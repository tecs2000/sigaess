import { Injectable } from '@angular/core';

import { Cadeira } from "./cadeiras";

@Injectable()
export class CadeiraService {
  cadeiras: Cadeira[] = [];

  criar(cadeira: Cadeira): Cadeira | string {
    cadeira = cadeira.clone();
    var result_check = this.checkCriar(cadeira);
    if (result_check == "ok") {
      this.cadeiras.push(cadeira);
      return cadeira;
    }
    return result_check;
  }
  
  checkCriar(cadeira: Cadeira): string {
    if (!this.cadeiraNaoCadastrada(cadeira.nome_disciplina)) {
      return "Cadeira Já Cadastrada";
    } if (!this.validNomeDisc(cadeira.nome_disciplina)) {
      return "Nome da Disciplina Inválido";
    } if (!this.validNumVagas(cadeira.numero_vagas)) {
      return "Numero de Vagas Inválido";
    }
    return "ok";
  }

  validNomeDisc(nome_disciplina: string): boolean {
    if (nome_disciplina.replace(/\s/g, '') == "") {
      return false;
    }
    return true;
  }
  
  validNumVagas(num_str: string) {
    if (Number.isNaN(num_str)) {
      return false;
    } 
    const num = Number(num_str);
    if (!Number.isInteger(num) || num <= 0) {
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
  
  getCadeiras(nome_professor="", departamento_ofertante=""): Cadeira[] {
    var result: Cadeira[] = [];
    for (let c of this.cadeiras) {
      if ((nome_professor=="" || c.nome_professor == nome_professor)
          && (departamento_ofertante=="" || c.departamento_ofertante==departamento_ofertante))
        result.push(c.clone());
    }
    return result;
  }
}