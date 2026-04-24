import { Component, Input } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-botao-confirmar',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './botao-confirmar.html',
  styleUrls: ['./botao-confirmar.css'],
})
export class BotaoConfirmar {

  @Input() texto: string = 'Confirmar';
  @Input() icon: string = '';
  @Input() variant: string = '';
}

