import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Risultato } from './Risposta';

@Injectable({
  providedIn: 'root'
})
export class ProdottoserviceService {

  private endPoint: string = "http://localhost:3000/api/prodotto"

  constructor(private http: HttpClient) { 

  }

  findAll(){
    return this.http.get<Risultato>(this.endPoint)
  }

  findById(varId: string){
    return this.http.get<Risultato>(`${this.endPoint}/${varId}`)
  }

}
