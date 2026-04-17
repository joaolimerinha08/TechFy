import { Perfil } from "../../pages/perfil/perfil";

export interface UsuarioForm {
    nome: string,
    cpf: string,
    email: string,
    perfil: Perfil
}