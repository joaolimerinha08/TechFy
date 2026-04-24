import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TurmaForm } from '../types/TurmaForm';
import { Observable } from 'rxjs';
import { Turmas } from '../../pages/turma/turma';
import { TurmaUpdateForm } from '../types/TurmaUpdateForm';
import { API_CONFIG } from '../../config/API_CONFIG';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {

  private http = inject(HttpClient);
  private baseUrl = API_CONFIG.baseUrl;

  criar(turma: TurmaForm): Observable<Turmas> {
    return this.http.post<Turmas>(`${this.baseUrl}/turmas`, turma)
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/turmas/${id}`)
  }

  editar(id: number, turma: TurmaUpdateForm): Observable<Turmas> {
    return this.http.put<Turmas>(`${this.baseUrl}/turmas/${id}`, turma)
  }
}