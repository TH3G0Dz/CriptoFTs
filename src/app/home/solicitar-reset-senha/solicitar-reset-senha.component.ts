import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SolicitarResetSenhaService } from "./solicitart-reset-senha.service";
import { MensagemService } from "src/app/componentes/mensagem/mensagem.service";


@Component({
  selector: 'app-solicitar-reset-senha',
  templateUrl: './solicitar-reset-senha.component.html',
  styleUrls: ['./solicitar-reset-senha.component.css'],
})
export class SolicitarResetSenhaComponent implements OnInit {
  email = '';

  constructor(
    private router: Router,
    private solicitarResetSenhaService: SolicitarResetSenhaService,
    private mensagemService: MensagemService,
  ) {}
  ngOnInit(): void {
  }

  solicitarResetSenha(){
    this.solicitarResetSenhaService.solicitarResetSenha(this.email).subscribe(
      () => {
        this.mensagemService.MensagemDeSucesso("Um E-mail foi enviado para voçê trocar de senha!");
        },
        (e) => {
          var erros = e.error.reasons

          switch(erros[0].message){
            case "Failed : DuplicateUserName":
                this.mensagemService.MensagemDeErro("Email incorreto!");
              break;
              default:
                this.mensagemService.MensagemDeErro(erros[0].message);
              break;
          }
        }
      );
    }

}
