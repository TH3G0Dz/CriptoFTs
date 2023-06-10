import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';

@Component({
  selector: 'app-assistir',
  templateUrl: './assistir.component.html',
  styleUrls: ['./assistir.component.css']
})
export class AssistirComponent  implements OnInit {

  constructor(
    private mensagemService: MensagemService
  ) {
  }

  ngOnInit(){
    this.mensagemService.MensagemDeErro("Testando mensagem");
  }
}
