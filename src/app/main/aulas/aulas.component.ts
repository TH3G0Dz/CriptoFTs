import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent  implements OnInit {

  constructor(
    private mensagemService: MensagemService
  ) {
  }

  ngOnInit(){
    this.mensagemService.MensagemDeErro("Testando mensagem");
  }
}
