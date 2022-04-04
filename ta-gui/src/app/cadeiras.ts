import { Aluno } from "./aluno";

export class Cadeira {
    nome_disciplina: string;
    nome_professor: string;
    numero_vagas: string;
    carga_horaria: string;
    departamento_ofertante: string;
    horarios: string[];
    alunos: Aluno[];
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome_disciplina = "";
      this.nome_professor = "";
      this.numero_vagas = "";
      this.carga_horaria = "";
      this.departamento_ofertante = "";
      this.horarios = [];
      this.alunos = [];
    }
  
    clone(): Cadeira {
      var cadeira: Cadeira = new Cadeira();
      cadeira.nome_disciplina = this.nome_disciplina;
      cadeira.nome_professor = this.nome_professor;
      cadeira.numero_vagas = this.numero_vagas;
      cadeira.carga_horaria = this.carga_horaria;
      cadeira.departamento_ofertante = this.departamento_ofertante;
      cadeira.horarios = this.cloneHorarios();
      cadeira.alunos = this.cloneAlunos();
      return cadeira;
    }
  
    cloneHorarios(): string[] {
      var horarios: string[] = [];
      for (let h in this.horarios) {
        horarios.push(h);
      }
      return horarios;
    }

    cloneAlunos(): Array<Aluno> {
      var alunos: Array<Aluno> = new Array<Aluno>();
      for (var i = 0, len = this.alunos.length; i < len; ++i) {
        alunos.push(this.alunos[i]);
      }
      return alunos;
    }
  }
  