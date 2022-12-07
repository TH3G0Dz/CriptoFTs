import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

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
          '',
          [minusculoValidator],
          [this.usuarioExistenteService.usuarioJaExite()],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [''],
        repassword: ['']
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
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
