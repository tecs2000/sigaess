import { Pessoa } from '../common/pessoa';

export class CadastroDePessoas {
    Pessoas: Pessoa[] = [];

    criar(aluno: Pessoa): Pessoa {
      var result = null;
      if (this.cpfNaoCadastrado(aluno.email)) {
        result = new Pessoa();
        result.copyFrom(aluno);
        this.Pessoas.push(result);
      }
      return result;
    }

    cpfNaoCadastrado(email: string): boolean {
      return !this.Pessoas.find(a => a.email == email);
    }

    atualizar(aluno: Pessoa): Pessoa {
      var result: Pessoa = this.Pessoas.find(a => a.email == aluno.email);
      if (result) result.copyFrom(aluno);
      return result;
    }

    getPessoas(): Pessoa[] {
      return this.Pessoas;
    }

    checksenha(email: string, senha: string): boolean {
      return !this.Pessoas.find(a => a.email == email && a.senha == senha);
    }

    getAlunoCPFPass(email: string, senha: string): Pessoa {
      return this.Pessoas.find(a => a.email == email && a.senha == senha);
    }
} 