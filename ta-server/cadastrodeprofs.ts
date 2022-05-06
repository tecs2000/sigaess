import { Professor } from '../common/professor';

export class CadastroDeProfs {
    professors: Professor[] = [];

    criar(professor: Professor): Professor {
      var result = null;
      if (this.cpfNaoCadastrado(professor.cpf)) {
        result = new Professor();
        result.copyFrom(professor);
        this.professors.push(result);
      }
      return result;
    }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.professors.find(a => a.cpf == cpf);
    }

    atualizar(professor: Professor): Professor {
      var result: Professor = this.professors.find(a => a.cpf == professor.cpf);
      if (result) result.copyFrom(professor);
      return result;
    }

    getprofessors(): Professor[] {
      return this.professors;
    }

    checksenha(cpf: string, senha: string): boolean {
      return !this.professors.find(a => a.cpf == cpf && a.senha == senha);
    }

    getprofessorCPFPass(cpf: string, senha: string): Professor {
      return this.professors.find(a => a.cpf == cpf && a.senha == senha);
    }
} 