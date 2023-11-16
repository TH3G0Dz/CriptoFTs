import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class ReCaptchaComponent implements OnInit {

  siteKey = 'SITEKEY';

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // Verifique se o usuário passou no reCAPTCHA
    if (true) {
      // O usuário passou no reCAPTCHA
    } else {
      // O usuário falhou no reCAPTCHA
    }
  }

}
