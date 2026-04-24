import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './historico.html',
  styleUrl: './historico.css',
})
export class Historico {
  // Lista de dados simplificada
  saidas = [
    { 
      data: '13/03/2026', 
      aluno: 'Ana Beatriz Gomes', 
      turma: '5º Ano A', 
      horario: '12:05', 
      liberadoPara: 'Marta Gomes (Mãe)', 
      local: 'Portaria 1' 
    }
  ];
}