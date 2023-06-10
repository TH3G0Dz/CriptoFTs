import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Noticia } from './noticia';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {

  constructor(private http: HttpClient) {
  }

  public getLista(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(environment.ApiUrl +'/noticia/ObterNoticias');
  }
}
