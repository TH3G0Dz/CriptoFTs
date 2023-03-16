import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { EqualsPasswordValidator, usuarioSenhaIguaisValidator, validarCaracterEspecial, validarLetraMaiuscula, validarNumero } from './senha-validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        userName: [
          '',          [minusculoValidator,Validators.required,
          this.usuarioExistenteService.usuarioJaExite()],
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

          var erros = e.error.reasons

          switch(erros[0].message){
            case "Failed : DuplicateUserName":
                alert("Usúario já cadastrado");
              break;
              default:
                alert(erros[0].message);
              break;
          }
        }
      );
    }
  }
}
