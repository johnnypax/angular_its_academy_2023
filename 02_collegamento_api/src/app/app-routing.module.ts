import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentiListaComponent } from './studenti-lista/studenti-lista.component';
import { StudentiDettaglioComponent } from './studenti-dettaglio/studenti-dettaglio.component';
import { StudentiInserimentoComponent } from './studenti-inserimento/studenti-inserimento.component';

const routes: Routes = [
  {
    path: "studenti/lista",
    component: StudentiListaComponent
  },
  {
    path: "studenti",
    redirectTo: "studenti/lista"
  },
  {
    path: "",
    redirectTo: "studenti/lista",
    pathMatch: "full"
  },
  {
    path: "studenti/dettaglio/:studenteID",
    component: StudentiDettaglioComponent
  },
  {
    path: "studenti/nuovo",
    component: StudentiInserimentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
