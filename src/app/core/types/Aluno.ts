import { Turmas } from "../../pages/turma/turma";
export interface Aluno {
    id: number,
    matricula: string,
    nome: string,
    dataNascimento: Date,
    foto: string,
    turma: Turmas,
    ativo: boolean

}