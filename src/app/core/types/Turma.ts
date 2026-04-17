export interface  Turma {
    id: number,
    nome: string,
    turno: Turno,
    anoletivo: number,
    ativa: boolean
}

export enum Turno {
    manha, tarde, noite, integral
}