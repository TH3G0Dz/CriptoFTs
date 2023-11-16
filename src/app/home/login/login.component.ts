import { TokenService } from './../../autenticacao/token.service';
import { MensagemService } from './../../componentes/mensagem/mensagem.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AutenticacaoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private mensagemService: MensagemService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        userName: [
          '', [Validators.required],
        ],
        senha: ['',Validators.required],
      },
    );
  }



  matcher = new MyErrorStateMatcher();

  login() {
    this.authService.autenticar(this.loginForm.get('userName')?.value, this.loginForm.get('senha')?.value).subscribe(
      (response: any) => {
        var token = response[0].message;
        this.router.navigate(['principal']);
        this.tokenService.salvaToken(token);
      },
      (error) => {
        this.mensagemService.MensagemDeErro(error);
      }
    );
  }
}
