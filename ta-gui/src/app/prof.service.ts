import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Professor } from '../../../common/professor';

@Injectable()
export class ProfService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {}

  criar(professor: Professor): Observable<Professor> {
    return this.http.post<any>(this.taURL + "/professor", professor, {headers: this.headers})
      .pipe( 
        retry(2),
        map( res => {if (res.success) {return professor;} else {return null;}} )
      ); 
  }

  atualizar(professor: Professor): Observable<Professor> {
    return this.http.put<any>(this.taURL + "/professor",JSON.stringify(professor), {headers: this.headers})
      .pipe( 
        retry(2),
        map( res => {if (res.success) {return professor;} else {return null;}} )
      ); 
  }

  getProfs(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.taURL + "/professor")
      .pipe(
          retry(2)
      );
  }
}
