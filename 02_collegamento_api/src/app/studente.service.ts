import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http'
import { Studente } from './Studente';
import { Risultato } from './Risultato';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {

  constructor(private http: HttpClient) { 

  }

  cercaTuttiStudenti(){
    return this.http.get("http://localhost:4000/api/lista")
  }

  cercaStudentePerId(varId: string){
    return this.http.get<Studente>(`http://localhost:4000/api/dettaglio/${varId}`)
  }

  inserisciStudente(objStu: Studente){

    var header_custom = new HttpHeaders();
    header_custom = header_custom.set('Content-Type', 'application/json');

    return this.http.post<Risultato>("http://localhost:4000/api/salva", JSON.stringify(objStu), {headers: header_custom})
  }

  eliminaStudente(varId: string){
    return this.http.delete<Risultato>(`http://localhost:4000/api/elimina/${varId}`)
  }

}
