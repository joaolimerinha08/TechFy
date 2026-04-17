import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Navegacao } from './layouts/navegacao/navegacao';
import { Turma } from './pages/turma/turma';
import { Alunos } from './pages/alunos/alunos';
import { Perfil } from './pages/perfil/perfil';
import { CadastrarAluno } from './pages/cadastrar-aluno/cadastrar-aluno';
import { CadastrarTurma } from './pages/cadastrar-turma/cadastrar-turma';
import { CadastrarUsuario } from './pages/cadastrar-usuario/cadastrar-usuario';
import { DadosAluno } from './pages/dados-aluno/dados-aluno';
import { DadosUsuario } from './pages/dados-usuario/dados-usuario';
import { EditarAluno } from './pages/editar-aluno/editar-aluno';
import { EditarTurma } from './pages/editar-turma/editar-turma';
import { EditarUsuario } from './pages/editar-usuario/editar-usuario';
import { Usuarios } from './pages/usuarios/usuarios';
import { EsqueciSenha } from './pages/esqueci-senha/esqueci-senha';
import { Dashboard } from './pages/dashboard/dashboard';
import { Relatorio } from './pages/relatorio/relatorio';
import { Historico } from './pages/historico/historico';
import { SaidaAlunos } from './pages/saida-alunos/saida-alunos';

export const routes: Routes = [

    {
        path: "login",
        component: Login
    },

    {
        path:"",
        component: Navegacao,
        children: [
            {
                path: "turmas",
                component: Turma
            },
            {
                path: "alunos",
                component: Alunos
            },
            {
                path: "cadastrar-aluno",
                component: CadastrarAluno
            },
            {
                path: "cadastrar-aluno",
                component: CadastrarAluno
            },
            {
                path: "cadastrar-turma",
                component: CadastrarTurma
            },
            {
                path: "cadastrar-aluno",
                component: CadastrarAluno
            },
            {
                path: "cadastrar-usuario",
                component: CadastrarUsuario
            },
            {
                path: "dados-aluno",
                component: DadosAluno
            },
            {
                path: "dados-usuario",
                component: DadosUsuario
            },
            {
                path: "editar-aluno",
                component: EditarAluno
            },
            {
                path: "editar-turma",
                component: EditarTurma
            },
            {
                path: "editar-usuario",
                component: EditarUsuario
            },
            {
                path: "perfil",
                component: Perfil
            },
            {
                path: "usuarios",
                component: Usuarios
            },
            {
                path:"esqueci-senha",
                component: EsqueciSenha
            },
            {
                path: "dashboard",
                component: Dashboard
            },
            {
                path: "relatorio",
                component: Relatorio
            },
            {
                path: "historico",
                component: Historico
            },
            {
                path: "saida-alunos",
                component: SaidaAlunos
            }



        ]
    }
];
