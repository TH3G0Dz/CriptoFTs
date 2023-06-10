import { Usuario } from './../../../autenticacao/usuario/usuario';

export interface Noticia {
  Autor?: number;
  Titulo?: string;
  Conteudo?: string;
  DateTime?: Date;
  Usuario?: Usuario;
}
