import { Component } from '@angular/core';
import { ProdottoserviceService } from '../prodottoservice.service';
import { Risultato } from '../Risposta';

@Component({
  selector: 'app-prodotto-lista',
  templateUrl: './prodotto-lista.component.html',
  styleUrls: ['./prodotto-lista.component.css']
})
export class ProdottoListaComponent {

  elenco: any = [];
  isErroreConnessione: boolean = false;

  constructor(private service: ProdottoserviceService){

  }

  aggiornaLista(){
    this.service.findAll().subscribe(
      (risultato) => {
        this.elenco = risultato.data
      },
      (errore) => {
        // alert("Errore di chiamata")
        this.isErroreConnessione = true;
      }
    )
  }

  ngOnInit(){
    setInterval(() => {
      this.aggiornaLista();
    }, 1000)
    
  }
}
