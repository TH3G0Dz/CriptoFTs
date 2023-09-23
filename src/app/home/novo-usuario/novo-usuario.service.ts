import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post(environment.ApiUrl +'/api/register', novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get(environment.ApiUrl + `/api/user/${nomeUsuario}`);
  }
}
