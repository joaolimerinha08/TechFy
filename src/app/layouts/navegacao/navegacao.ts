import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './navegacao.html',
  styleUrls: ['./navegacao.css'],
})
export class Navegacao {}