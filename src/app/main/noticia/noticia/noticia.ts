import { Usuario } from './../../../autenticacao/usuario/usuario';

export interface Noticia {
  autor?: number;
  titulo?: string;
  conteudo?: string;
  data?: Date;
  usuario?: Usuario;
}
