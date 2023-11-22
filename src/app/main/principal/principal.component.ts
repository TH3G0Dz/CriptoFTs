import { Component, OnInit } from '@angular/core';
import { CryptoInfo } from './crypto-info';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  public cryptoInfo: CryptoInfo;

  constructor(private _cryptoInfo: CryptoInfo, private cryptoService: CryptoService) {
    this.cryptoInfo = _cryptoInfo;
  }

  ngOnInit(): void {
  }
}