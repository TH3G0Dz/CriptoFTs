import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdicionarNoticiaModalComponent } from '../noticia/adicionar-noticia-modal/adicionar-noticia-modal.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent  implements OnInit {

  constructor(
    private mensagemService: MensagemService,private router: Router,private dialog: MatDialog
  ) {
  }

  ngOnInit(){
    this.mensagemService.MensagemDeErro("Testando mensagem");
  }
}
