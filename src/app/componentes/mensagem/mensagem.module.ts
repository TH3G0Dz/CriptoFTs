import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@NgModule({
  declarations: [MensagemComponent],
  imports: [CommonModule],
  exports: [MensagemComponent],
})
export class MensagemModule {}
