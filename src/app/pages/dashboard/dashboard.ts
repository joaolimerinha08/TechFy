import { Component } from '@angular/core';
import { BotaoConfirmar } from "../../shared/botao-confirmar/botao-confirmar";
import { BotaoCancelar } from "../../shared/botao-cancelar/botao-cancelar";
import { Cartao } from "../../shared/cartao/cartao";
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  imports: [BotaoConfirmar, Cartao, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}