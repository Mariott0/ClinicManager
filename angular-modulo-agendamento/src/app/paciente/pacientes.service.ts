import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente.model';
@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  private apiURL = 'http://localhost:3000/paciente';

  constructor(private http: HttpClient) {}

  listarPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiURL);
  }
  cadastrarPacientes(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.apiURL, paciente);
  }
  buscarPacientes(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.apiURL}/${id}`);
  }
  atualizarPacientes(id: string, paciente: Paciente): Observable<Paciente> {
    return this.http.patch<Paciente>(`${this.apiURL}/${id}`, paciente);
  }
  deletarPaciente(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
