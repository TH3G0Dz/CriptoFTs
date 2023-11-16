// principal.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    // outros componentes relacionados ao PrincipalComponent, se houver
  ],
  imports: [
    CommonModule,
    // outros módulos necessários
  ],
  exports: [
    PrincipalComponent,
    // exporte outros componentes, diretivas ou módulos, se necessário
  ],
})
export class PrincipalModule { }
