export interface UsuarioResponse {
    id: number,
    nome: string,
    email: string,
    cpf: string,
    perfil: Perfil,
    ativo: boolean,
    senhaAlterada: boolean

}

export enum Perfil{
    master, admin, funcionario
}