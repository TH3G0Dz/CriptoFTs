import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { EmailActiveMessageComponent } from './email-ativate/ative-email.component';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SolicitarResetSenhaComponent } from './solicitar-reset-senha/solicitar-reset-senha.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';
import { CaptchaModule } from '../componentes/recaptcha/captcha.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent, EmailActiveMessageComponent,SolicitarResetSenhaComponent,ResetSenhaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CaptchaModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule,
    MatInputModule,MatAutocompleteModule
  ],
  exports: [HomeComponent,],
})
export class HomeModule {}
