import { AssistirComponent } from './main/assistir/assistir.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoadModule } from './componentes/load/load.module';
import { RouterModule } from '@angular/router';
import { NovidadesComponent } from './main/novidades/novidades.component';
import { AulasComponent } from './main/aulas/aulas.component';
import { NoticiaComponent } from './main/noticia/noticia.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdicionarNoticiaModalComponent } from './main/noticia/adicionar-noticia-modal/adicionar-noticia-modal.component';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PerfilComponent } from './main/perfil/perfil.component';
import { PrincipalModule } from './main/principal/principal.module';


@NgModule({
  declarations: [AppComponent,NovidadesComponent,AssistirComponent,AulasComponent,NoticiaComponent,AdicionarNoticiaModalComponent,PerfilComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    CommonModule,
    RodapeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    LoadModule,RouterModule,MatDialogModule,ReactiveFormsModule,MatInputModule,MatAutocompleteModule,PrincipalModule
  ],
  exports: [
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
