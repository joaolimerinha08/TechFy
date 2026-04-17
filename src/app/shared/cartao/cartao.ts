import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cartao',
  imports: [CommonModule, MatIconModule],
  templateUrl: './cartao.html',
  styleUrl: './cartao.css',
})
export class Cartao {
  @Input() icon: string = 'group';
}
