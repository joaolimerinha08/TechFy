import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TurmaForm } from '../types/TurmaForm';
import { Observable } from 'rxjs';
import { Turma } from '../../pages/turma/turma';
import { TurmaUpdateForm } from '../types/TurmaUpdateForm';
import { API_CONFIG } from '../../config/API_CONFIG';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {

  private http = inject(HttpClient);
  private baseUrl = API_CONFIG.baseUrl;

  criar(turma: TurmaForm): Observable<Turma> {
    return this.http.post<Turma>(`${this.baseUrl}/turmas`, turma)
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/turmas/${id}`)
  }

  editar(id: number, turma: TurmaUpdateForm): Observable<Turma> {
    return this.http.put<Turma>(`${this.baseUrl}/turmas/${id}`, turma)
  }
}
