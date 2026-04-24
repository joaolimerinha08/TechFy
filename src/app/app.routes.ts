import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Navegacao } from './layouts/navegacao/navegacao';

import { Dashboard } from './pages/dashboard/dashboard';
import { Turmas } from './pages/turma/turma';
import { SaidaAlunos } from './pages/saida-alunos/saida-alunos';

// 👇 NOVOS (se ainda não existirem, você precisa criar)
import { CadastrarAluno } from './pages/cadastrar-aluno/cadastrar-aluno';
import { Relatorio } from './pages/relatorio/relatorio';
import { Historico } from './pages/historico/historico';

export const routes: Routes = [

  {
    path: "login",
    component: Login
  },

  {
    path: "",
    component: Navegacao,
    children: [

      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },

      {
        path: "dashboard",
        component: Dashboard
      },

      {
        path: "turmas",
        component: Turmas
      },

      {
        path: "saida-alunos",
        component: SaidaAlunos
      },

      {
        path: "cadastrar-aluno",
        component: CadastrarAluno
      },

      {
        path: "relatorio",
        component: Relatorio
      },

      {
        path: "historico",
        component: Historico
      }

    ]
  },

  {
    path: "**",
    redirectTo: "dashboard"
  }

];