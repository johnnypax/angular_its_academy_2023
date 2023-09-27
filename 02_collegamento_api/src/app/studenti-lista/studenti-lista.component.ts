import { Component } from '@angular/core';
import { StudenteService } from '../studente.service';

@Component({
  selector: 'app-studenti-lista',
  templateUrl: './studenti-lista.component.html',
  styleUrls: ['./studenti-lista.component.css']
})
export class StudentiListaComponent {

  elenco: any = [];

  constructor(private service: StudenteService){
    console.log("Sono il costruttore")
  }

  ngOnInit(){
    this.service.cercaTuttiStudenti().subscribe(
      (risultato) => {
        this.elenco = risultato
      },
      (errore) => {

        console.log(errore)
      }
    )

  }



}
