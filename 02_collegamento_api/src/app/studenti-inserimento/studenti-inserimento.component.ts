import { Component } from '@angular/core';
import { Studente } from '../Studente';
import { StudenteService } from '../studente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studenti-inserimento',
  templateUrl: './studenti-inserimento.component.html',
  styleUrls: ['./studenti-inserimento.component.css']
})
export class StudentiInserimentoComponent {

  varNome: string | undefined;
  varCognome: string | undefined;
  varMatricola: string | undefined;

  constructor(private service: StudenteService, private router: Router){

  }

  insertStudente(){

    let stu: Studente = new Studente();
    stu.nome = this.varNome;
    stu.cognome = this.varCognome;
    stu.matricola = this.varMatricola;

    this.service.inserisciStudente(stu).subscribe(
      (risultato) => {
        if(risultato.status == 'success'){
          alert("Stappoooooooo")
          
          this.router.navigateByUrl("studenti/lista")
        }
        else
          alert("Errore")
      },
      
      (errore) => {
        console.log(errore)
      }
    )
  }

}
