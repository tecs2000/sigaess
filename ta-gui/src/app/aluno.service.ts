import { Injectable } from '@angular/core';

import { Aluno } from '../../../common/aluno';

@Injectable()
export class AlunoService {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): Aluno | null {
    aluno = aluno.clone();
    var result = null;
    if (this.cpfNaoCadastrado(aluno.cpf)) {
      this.alunos.push(aluno);
      result = aluno;
    }
    return result;
  }

  cpfNaoCadastrado(cpf: string): boolean {
     return !this.alunos.find(a => a.cpf == cpf);
  }

  atualizar(aluno: Aluno): void {
    aluno = aluno.clone();
  }

  checksenha(cpf: string, senha: string): boolean {
    return !this.alunos.find(a => a.cpf == cpf && a.senha == senha);
  }

  getAlunos(): Aluno[] {
    var result: Aluno[] = [];
    for (let a of this.alunos) {
      result.push(a.clone());
    }
    return result;
  }

  getAlunoCPFPass(cpf: string, senha: string): Aluno {
    return this.alunos.find(a => a.cpf == cpf && a.senha == senha);
  }
}
