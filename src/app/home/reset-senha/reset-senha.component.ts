import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ResetSenhaService } from "./reset-senha.service";
import { MensagemService } from "src/app/componentes/mensagem/mensagem.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EqualsPasswordValidator, usuarioSenhaIguaisValidator, validarCaracterEspecial, validarLetraMaiuscula, validarNumero } from "../novo-usuario/senha-validator";
import { RedefinirSenha } from "./redefinir-senha";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';



@Component({
  selector: 'app-reset-senha',
  templateUrl: './reset-senha.component.html',
  styleUrls: ['./reset-senha.component.css'],
})
export class ResetSenhaComponent implements OnInit {
  resetSenhaForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private resetSenhaService: ResetSenhaService,
    private formBuilder: FormBuilder,
    private mensagemService: MensagemService,
  ) {}

  ngOnInit(): void {
    this.resetSenhaForm = this.formBuilder.group(
      {
        token: [this.activatedRoute.snapshot.queryParams.token, [Validators.required],],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),validarCaracterEspecial.bind(this),validarLetraMaiuscula.bind(this),validarNumero.bind(this)]],
        repassword: ['',[Validators.required, EqualsPasswordValidator.bind(this)]]
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  redefinirSenha() {

    if (this.resetSenhaForm.valid) {
      const redefinirSenha = this.resetSenhaForm.getRawValue() as RedefinirSenha;

      this.resetSenhaService.resetSenha(redefinirSenha).subscribe(
        () => {
          this.router.navigate(['home']);
          this.mensagemService.MensagemDeSucesso("Senha alterada com sucesso!");
        },
        (e) => {
          var erros = e.error.reasons

          switch(erros[0].message){
            case "Failed : DuplicateUserName":
                this.mensagemService.MensagemDeErro("Usúario já cadastrado");
              break;
              default:
                this.mensagemService.MensagemDeErro(erros[0].message);
              break;
          }
        }
      );
    }
  }
}
