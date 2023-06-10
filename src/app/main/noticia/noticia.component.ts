import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';
import { Noticia } from './noticia/noticia';
import { NoticiaService } from './noticia/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent  implements OnInit {
  noticias: Noticia[];

  constructor(
    private mensagemService: MensagemService,private noticiaService: NoticiaService
  ) {
  }

  ngOnInit(){
    this.noticiaService.getLista().subscribe((data) => {
      this.noticias = data
    });
  }
}
