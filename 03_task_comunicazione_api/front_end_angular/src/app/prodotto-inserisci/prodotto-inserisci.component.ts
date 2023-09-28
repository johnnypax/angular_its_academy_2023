import { Component } from '@angular/core';
import { ProdottoserviceService } from '../prodottoservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Risultato } from '../Risposta';
import { Prodotto } from '../Prodotto';

@Component({
  selector: 'app-prodotto-inserisci',
  templateUrl: './prodotto-inserisci.component.html',
  styleUrls: ['./prodotto-inserisci.component.css']
})
export class ProdottoInserisciComponent {

  varId: string | undefined;
  varNome: string | undefined;
  varCodice: string | undefined;
  varPrezzo: number | undefined;
  varCategoria: string | undefined;

  isInErrore: boolean = false;
  
  constructor(
    private service: ProdottoserviceService,
    private rottaAttiva: ActivatedRoute,
    private router: Router
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

            this.isInErrore = false;
          },
          (errore) => {
            this.isInErrore = true;
          })
      },
      (errore) => {
        this.isInErrore = true;
      })
  }

  inserisciProdotto(){

    let oggetto: Prodotto = {
      _id: this.varId,
      nome: this.varNome,
      codice: this.varCodice,
      prezzo: this.varPrezzo,
      categoria: this.varCategoria,
    }
    
    this.service.insert(oggetto).subscribe(
      (risultato) => {
        if(risultato.status == 'success'){
          
          this.router.navigateByUrl("prodotto/lista")
        }
        else
          this.isInErrore = true;
      },
      
      (errore) => {
        console.log(errore)
      }
    )
  }
}
