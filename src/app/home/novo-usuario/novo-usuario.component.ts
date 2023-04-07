import { MensagemService } from './../../componentes/mensagem/mensagem.service';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { EqualsPasswordValidator, usuarioSenhaIguaisValidator, validarCaracterEspecial, validarLetraMaiuscula, validarNumero } from './senha-validator';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],

})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm: FormGroup;
  loading = false;

  constructor(
    private mensagemService: MensagemService,
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        userName: [
          '', [Validators.required],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),
        ,validarCaracterEspecial.bind(this),validarLetraMaiuscula.bind(this),validarNumero.bind(this)]],
        repassword: ['',[Validators.required, EqualsPasswordValidator.bind(this)]]
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    console.log(this.novoUsuarioForm.valid)
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
        () => {
          this.router.navigate(['home/ativeemail']);
        },
        (e) => {
          this.loading = false;
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
