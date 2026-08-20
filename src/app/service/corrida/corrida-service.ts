import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { corrida } from '../../models/corrida';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {

  private urlApi =
    'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida';

  constructor(private http: HttpClient) {}


  salvarCorrida(objCorrida: corrida): Observable<corrida> {

    return this.http.post<corrida>(
      this.urlApi,
      objCorrida
    );

  }


  listarCorridas(): Observable<corrida[]> {

    return this.http.get<corrida[]>(
      this.urlApi
    );

  }


  listarCorrida(idCorrida: number): Observable<corrida> {

    return this.http.get<corrida>(
      `${this.urlApi}/${idCorrida}`
    );

  }


  excluirCorrida(idCorrida: number): Observable<corrida> {

    return this.http.delete<corrida>(
      `${this.urlApi}/${idCorrida}`
    );

  }


  alterarCorrida(objCorrida: corrida): Observable<corrida> {

    return this.http.put<corrida>(
      `${this.urlApi}/${objCorrida.id}`,
      objCorrida
    );

  }

}