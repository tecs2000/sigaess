import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Pessoa } from '../../../common/pessoa';

@Injectable()
export class PessoaService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {}

  criar(aluno: Pessoa): Observable<Pessoa> {
    return this.http.post<any>(this.taURL + "/aluno", aluno, {headers: this.headers})
      .pipe( 
        retry(2),
        map( res => {if (res.success) {return aluno;} else {return null;}} )
      ); 
  }

  atualizar(aluno: Pessoa): Observable<Pessoa> {
    return this.http.put<any>(this.taURL + "/aluno", JSON.stringify(aluno), {headers: this.headers})
      .pipe( 
        retry(2),
        map( res => {if (res.success) {return aluno;} else {return null;}} )
      ); 
  }

  getAlunos(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.taURL + "/alunos")
      .pipe(
          retry(2)
      );
  }
}
