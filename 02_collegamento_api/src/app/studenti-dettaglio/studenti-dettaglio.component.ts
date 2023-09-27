import { Component } from '@angular/core';
import { StudenteService } from '../studente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Parametri } from '../Parametri';

@Component({
  selector: 'app-studenti-dettaglio',
  templateUrl: './studenti-dettaglio.component.html',
  styleUrls: ['./studenti-dettaglio.component.css']
})
export class StudentiDettaglioComponent {

  varId: string | undefined;
  varNome: string | undefined;
  varCognome: string | undefined;
  varMatricola: string | undefined;

  constructor(
    private service: StudenteService, 
    private rottaAttiva: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(){
    this.rottaAttiva.params.subscribe(
      (parametri) => {
        let stuId = parametri.studenteID

        this.service.cercaStudentePerId(stuId).subscribe(
          (risultato) => {
            this.varId = stuId;
            this.varNome = risultato.nome;
            this.varCognome = risultato.cognome;
            this.varMatricola = risultato.matricola;
          },
          (errore) => {

          }
        )

      }
    )
  }

  eliminaStudente(){
    if(this.varId)
      this.service.eliminaStudente(this.varId).subscribe(
        (risultato) => {
          if(risultato.status == 'success'){
            alert("Stappoooooooo")
            
            this.router.navigateByUrl("studenti/lista")
          }
          else
            alert("Errore")
        },
        (errore) => {

          alert("Errore")
        }
      )
  }

}
