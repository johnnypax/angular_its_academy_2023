import { Component } from '@angular/core';
import { ProdottoserviceService } from '../prodottoservice.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../Prodotto';
import { Risultato } from '../Risposta';

@Component({
  selector: 'app-prodotto-modifica',
  templateUrl: './prodotto-modifica.component.html',
  styleUrls: ['./prodotto-modifica.component.css']
})
export class ProdottoModificaComponent {

  varId: string | undefined;
  varNome: string | undefined;
  varCodice: string | undefined;
  varPrezzo: number | undefined;
  varCategoria: string | undefined;

  constructor(
    private service: ProdottoserviceService,
    private rottaAttiva: ActivatedRoute
    ){

  }

  ngOnInit(){
    this.rottaAttiva.params.subscribe(
      (parametri) => {
        this.service.findById(parametri.id).subscribe(
          (risultato:Risultato) => {

            let pro: Prodotto = risultato.data ? risultato.data : null;

            this.varId = parametri.id;
            this.varNome = pro.nome;
            this.varCodice = pro.codice;
            this.varPrezzo = pro.prezzo;
            this.varCategoria = pro.categoria;
          },
          (errore) => {

          })
      },
      (errore) => {
        
      })
  }

  modificaProdotto(){

    let oggetto: Prodotto = {
      _id: this.varId,
      nome: this.varNome,
      codice: this.varCodice,
      prezzo: this.varPrezzo,
      categoria: this.varCategoria,
    }

    //TODO: Fai una PUT per salvarlo!

  }

}
