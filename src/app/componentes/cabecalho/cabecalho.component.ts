import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  loading = false;
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}


  logout() {
    this.usuarioService.logout();
    this.router.navigate(['home']);
  }
}
