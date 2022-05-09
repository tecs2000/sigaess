import { Aluno } from '../common/aluno';
import { Pessoa } from '../common/pessoa';

export class CadastroDeAlunos {
    alunos: Pessoa[] = [];

    criar(aluno: Pessoa): Pessoa {
      var result = null;
      if (this.cpfNaoCadastrado(aluno.email)) {
        result = new Pessoa();
        result.copyFrom(aluno);
        this.alunos.push(result);
      }
      return result;
    }

    cpfNaoCadastrado(email: string): boolean {
      return !this.alunos.find(a => a.email == email);
    }

    atualizar(aluno: Pessoa): Pessoa {
      var result: Pessoa = this.alunos.find(a => a.email == aluno.email);
      if (result) result.copyFrom(aluno);
      return result;
    }

    getAlunos(): Pessoa[] {
      return this.alunos;
    }

    checksenha(email: string, senha: string): boolean {
      return !this.alunos.find(a => a.email == email && a.senha == senha);
    }

    getAlunoCPFPass(email: string, senha: string): Pessoa {
      return this.alunos.find(a => a.email == email && a.senha == senha);
    }
} 