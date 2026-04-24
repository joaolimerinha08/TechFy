import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alunos',
  standalone: true, // ✅ ESSENCIAL
  imports: [CommonModule], // ✅ necessário pra *ngFor, *ngIf
  templateUrl: './alunos.html',
  styleUrls: ['./alunos.css'], // ✅ corrigido
})
export class Alunos {}