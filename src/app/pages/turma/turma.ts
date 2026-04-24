import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './turma.html',
  styleUrls: ['./turma.css']
})
export class Turmas {

  turmaSelecionada: any = null;

  turmas = [
    { id: 1, nome: '1º Ano A', totalAlunos: 32 },
    { id: 2, nome: '1º Ano B', totalAlunos: 30 }
  ];

  alunos = [
    { nome: 'Marcos Soares', turmaId: 1, foto: 'https://i.pravatar.cc/150?img=1' },
    { nome: 'Maria Silva', turmaId: 1, foto: 'https://i.pravatar.cc/150?img=2' },
    { nome: 'Pedro Lima', turmaId: 2, foto: 'https://i.pravatar.cc/150?img=3' }
  ];

  abrirTurma(turma: any) {
    this.turmaSelecionada = turma;
  }

  voltar() {
    this.turmaSelecionada = null;
  }

  alunosDaTurma() {
    return this.alunos.filter(a => a.turmaId === this.turmaSelecionada.id);
  }
}