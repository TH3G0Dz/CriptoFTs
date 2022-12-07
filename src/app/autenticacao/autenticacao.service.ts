import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, senha: string) {
    return this.httpClient
      .post(
        `${environment.ApiUrl}/login`,
        {
          userName: usuario,
          password: senha,
        }
      )
}}
