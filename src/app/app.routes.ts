import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Navegacao } from './layouts/navegacao/navegacao';

import { Turmas } from './pages/turma/turma'; // 👈 CLASSE É Turmas
import { Dashboard } from './pages/dashboard/dashboard';
import { SaidaAlunos } from './pages/saida-alunos/saida-alunos';

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
        component: Turmas // 👈 AQUI TAMBÉM
      },

      {
        path: "saida-alunos",
        component: SaidaAlunos
      }

    ]
  },

  {
    path: "**",
    redirectTo: "dashboard"
  }

];