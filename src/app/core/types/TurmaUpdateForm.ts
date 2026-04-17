import { Turno } from "./Turma";

export interface TurmaUpdateForm {
    nome: string,
    turno: Turno,
    anoletivo: number,
    ativa: boolean
}