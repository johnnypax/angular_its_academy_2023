import { Component } from '@angular/core';
import { ProdottoserviceService } from '../prodottoservice.service';
import { Risultato } from '../Risposta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prodotto-lista',
  templateUrl: './prodotto-lista.component.html',
  styleUrls: ['./prodotto-lista.component.css']
})
export class ProdottoListaComponent {

  elenco: any = [];
  isErroreConnessione: boolean = false;

  constructor(
    private service: ProdottoserviceService,
    private router: Router){

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

  eliminaProdotto(varId: string){
    this.service.delete(varId).subscribe(
      (risultato) => {
        if(risultato.status == 'success'){
          
          this.router.navigateByUrl("prodotto/lista")
        }
      },
      (errore) => {
        // alert("Errore di chiamata")
        this.isErroreConnessione = true;
      }
    )
  }
}
