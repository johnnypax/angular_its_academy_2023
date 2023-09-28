import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottoListaComponent } from './prodotto-lista/prodotto-lista.component';
import { ProdottoInserisciComponent } from './prodotto-inserisci/prodotto-inserisci.component';
import { ProdottoModificaComponent } from './prodotto-modifica/prodotto-modifica.component';

const routes: Routes = [
  {
    path: "prodotto/lista",
    component: ProdottoListaComponent
  },
  {
    path: "prodotto/inserisci",
    component: ProdottoInserisciComponent
  },
  {
    path: "prodotto/modifica/:id",
    component: ProdottoModificaComponent
  },
  {
    path: "",
    redirectTo: "prodotto/lista",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
