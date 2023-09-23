import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SolicitarResetSenhaService {
  constructor(private http: HttpClient) {}

  solicitarResetSenha(email: string) {
    console.log(email)
    return this.http.post(`${environment.ApiUrl}/solicitarresetsenha`,{Email: email})
  }
}
