import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailActiveMessageComponent } from './email-ativate/ative-email.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { SolicitarResetSenhaComponent } from './solicitar-reset-senha/solicitar-reset-senha.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent,
      },
      {
        path: 'ativeemail',
        component: EmailActiveMessageComponent,
      },
      {
        path: 'solicitar-reset-senha',
        component: SolicitarResetSenhaComponent,
      },
      {
        path: 'reset-senha',
        component: ResetSenhaComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
