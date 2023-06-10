import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NovidadesComponent } from './novidades/novidades.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AssistirComponent } from './assistir/assistir.component';
import { AdicionarNoticiaModalComponent } from './noticia/adicionar-noticia-modal/adicionar-noticia-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [PrincipalComponent,PerfilComponent],
  imports: [CommonModule,RouterModule,MatInputModule],
})
export class MainModule {}
