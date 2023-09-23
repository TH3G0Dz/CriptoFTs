import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RedefinirSenha } from './redefinir-senha';

@Injectable({
  providedIn: 'root',
})
export class ResetSenhaService {
  constructor(private http: HttpClient) {}

  resetSenha(redefinirSenha: RedefinirSenha) {
    return this.http.post(`${environment.ApiUrl}/redefinir-senha`,redefinirSenha)
  }
}
