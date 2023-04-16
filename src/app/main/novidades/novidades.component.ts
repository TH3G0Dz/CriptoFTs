import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.css']
})
export class NovidadesComponent  implements OnInit {

  constructor(
    private mensagemService: MensagemService
  ) {
  }

  ngOnInit(){
    this.mensagemService.MensagemDeErro("Testando mensagem");
  }
}
