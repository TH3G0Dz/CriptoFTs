import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';
import { Router } from '@angular/router';
import { AdicionarNoticiaModalComponent } from '../noticia/adicionar-noticia-modal/adicionar-noticia-modal.component';


@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.css']
})
export class NovidadesComponent  implements OnInit {

  constructor(
    private mensagemService: MensagemService,private router: Router,private dialog: MatDialog
  ) {
  }

  ngOnInit(){
    this.mensagemService.MensagemDeErro("Testando mensagem");
  }

  openModal() {
    this.dialog.open(AdicionarNoticiaModalComponent);
  }
}
