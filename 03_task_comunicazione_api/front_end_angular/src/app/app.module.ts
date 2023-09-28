import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottoInserisciComponent } from './prodotto-inserisci/prodotto-inserisci.component';
import { ProdottoListaComponent } from './prodotto-lista/prodotto-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdottoModificaComponent } from './prodotto-modifica/prodotto-modifica.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProdottoInserisciComponent,
    ProdottoListaComponent,
    ProdottoModificaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
