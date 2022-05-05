import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Aluno } from '..//../../common/aluno';
import { Cadeira } from "../../../common/cadeiras";

export class CadeiraAluno {
    cadeira = new Cadeira();
    aluno = new Aluno();

    constructor(cadeira: Cadeira, aluno: Aluno) {
        this.cadeira = cadeira;
        this.aluno = aluno;
    }
}

@Injectable()
export class CadeiraService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
    
    constructor(private http: HttpClient) {}
    criar(cadeira: Cadeira): Observable<Cadeira> {
        return this.http.post<any>(this.taURL + "/cadeira", cadeira, {headers: this.headers})
            .pipe(
                retry(2),
                map( res => {
                    if (res.sucess) {
                        return cadeira
                    } else {
                        return null
                    }
                })               
        );
    }

    atualizar(cadeira: Cadeira): Observable<Cadeira> {
        return this.http.put<any>(this.taURL + "/cadeira", JSON.stringify(cadeira), {headers: this.headers})
          .pipe( 
            retry(2),
            map( res => {
                if (res.success) {
                    return cadeira;
                } else {
                    return null;
                }
            })
        ); 
    }

    getCadeiras(departamento_ofertante: String = ""): Cadeira[] {
        var result: Cadeira[] = [];
        this.http.get<Cadeira[]>(this.taURL + "/cadeiras")
                            .pipe(
                                retry(2)
                            ).subscribe(
                                ar => {
                                        if (ar) {
                                            for (let c of ar) {
                                                if (departamento_ofertante=="" || c.departamento_ofertante==departamento_ofertante) {
                                                  result.push(c.clone());
                                                }
                                            }
                                        }
                                    },
                                msg => { alert(msg.message); }
                            );
        return result;        
    }

    getDepartamentos(): Observable<string[]> {
        return this.http.get<string[]>(this.taURL + "/departamentos")
            .pipe(
                retry(2)
            )
    }

    getCadeira(nome: string): Cadeira | null {
        var result = null;
        this.http.get<Cadeira[]>(this.taURL + "/cadeiras")
            .pipe(
                retry(2)
            ).subscribe(
                ar => {
                        if (ar) {
                            for (let c of ar) {
                                if (c.nome_disciplina == nome) {
                                result.push(c.clone());
                                break;
                                }
                            }
                        }
                    },
                msg => { alert(msg.message); }
            );
        return result;
    }

    addAluno(cadeira: Cadeira, aluno: Aluno): Observable<Cadeira> {
        var cadeiraAluno = new CadeiraAluno(cadeira, aluno)
        return this.http.put<any>(this.taURL + "/cadeiraAddAluno", JSON.stringify(cadeiraAluno), {headers: this.headers})
                .pipe(
                    retry(2),
                    map( res => {
                        if (res.success) {
                            return cadeira;
                        } else {
                            return null;
                        }
                    })
                );
    }
}

