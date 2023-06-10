import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './main/principal/principal.component';
import { NovidadesComponent } from './main/novidades/novidades.component';
import { AulasComponent } from './main/aulas/aulas.component';
import { PerfilComponent } from './main/perfil/perfil.component';
import { AssistirComponent } from './main/assistir/assistir.component';
import { NoticiaComponent } from './main/noticia/noticia.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'novidades',
    component: NovidadesComponent
  },
  {
    path: 'aulas',
    component: AulasComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'assistir',
    component: AssistirComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
