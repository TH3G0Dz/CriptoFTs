import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [CabecalhoComponent,],
  imports: [CommonModule, RouterModule,MatToolbarModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}
