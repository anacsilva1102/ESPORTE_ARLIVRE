import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Atleta } from '../models/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  private urlApi =
    'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta';

  constructor(private http: HttpClient) {}


  adicionarAtleta(atleta: Atleta): Observable<Atleta> {

    return this.http.post<Atleta>(
      this.urlApi,
      atleta
    );

  }


  listarAtletas(): Observable<Atleta[]> {

    return this.http.get<Atleta[]>(
      this.urlApi
    );

  }


  listarAtleta(idAtleta: number): Observable<Atleta> {

    return this.http.get<Atleta>(
      `${this.urlApi}/${idAtleta}`
    );

  }


  excluirAtleta(idAtleta: number): Observable<Atleta> {

    return this.http.delete<Atleta>(
      `${this.urlApi}/${idAtleta}`
    );

  }


  alterarAtleta(atleta: Atleta): Observable<Atleta> {

    return this.http.put<Atleta>(
      `${this.urlApi}/${atleta.id}`,
      atleta
    );

  }


  alterarAtleta2(
    idAtleta: number,
    atleta: Atleta
  ): Observable<Atleta> {

    return this.http.put<Atleta>(
      `${this.urlApi}/${idAtleta}`,
      atleta
    );

  }

}