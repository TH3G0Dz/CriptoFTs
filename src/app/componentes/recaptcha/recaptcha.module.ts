import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReCaptchaComponent } from './recaptcha.component';

@NgModule({
  declarations: [ReCaptchaComponent],
  imports: [CommonModule,
  ],
  exports: [ReCaptchaComponent],
})
export class ReCaptchaModule {}
