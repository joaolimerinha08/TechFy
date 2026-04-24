import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cartao',
  imports: [CommonModule, MatIconModule],
  templateUrl: './cartao.html',
  styleUrls: ['./cartao.css'],
})
export class Cartao {
  @Input() icon: string = 'group';

  get iconClass(): string {
    return this.icon
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-');
  }
}
