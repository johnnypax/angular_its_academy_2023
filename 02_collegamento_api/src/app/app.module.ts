import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentiListaComponent } from './studenti-lista/studenti-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentiDettaglioComponent } from './studenti-dettaglio/studenti-dettaglio.component';
import { StudentiInserimentoComponent } from './studenti-inserimento/studenti-inserimento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentiListaComponent,
    StudentiDettaglioComponent,
    StudentiInserimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   //Necessario per il Service
    FormsModule         //Necessario per il Form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
