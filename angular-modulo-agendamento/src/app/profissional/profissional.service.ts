import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profissional } from './profissional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  /*private apiURL = 'https://backend-project-clinicmanager-production.up.railway.app/profissional';*/  
  private apiURL = 'http://localhost:3000/profissional'; // URL do backend local


  constructor(private http: HttpClient) { }
  listarProfissionais(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(this.apiURL);

  }
  cadastrarProfissional(profissional: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.apiURL, profissional);

  }
  buscarProfissional(id: string): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.apiURL}/${id}`);

  }
  atualizarProfissional(id: string, profissional: Profissional): Observable<Profissional> {
    return this.http.patch<Profissional>(`${this.apiURL}/${id}`, profissional);

  }
  /*deletarProfissional(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);

  }*/

  excluirProfissional(id: string) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }


}