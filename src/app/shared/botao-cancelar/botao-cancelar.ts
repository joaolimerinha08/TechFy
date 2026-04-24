import { Component, Input } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-botao-cancelar',
  imports: [MatButtonModule, MatIconModule, RouterLink],

  templateUrl: './botao-cancelar.html',
  styleUrl: './botao-cancelar.css',
})
export class BotaoCancelar {

  @Input() texto: string = 'Cancelar';  
  @Input() icon: string = 'check';
}

