import { MainRoutingModule } from './../main/main.routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
