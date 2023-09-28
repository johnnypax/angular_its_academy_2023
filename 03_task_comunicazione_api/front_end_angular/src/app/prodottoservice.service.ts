import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Risultato } from './Risposta';
import { Prodotto } from './Prodotto';

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

  insert(obj: Prodotto){
    var header_custom = new HttpHeaders();
    header_custom = header_custom.set('Content-Type', 'application/json');

    return this.http.post<Risultato>(this.endPoint, JSON.stringify(obj), {headers: header_custom})
  }

  update(obj: Prodotto){
    var header_custom = new HttpHeaders();
    header_custom = header_custom.set('Content-Type', 'application/json');

    return this.http.put<Risultato>(this.endPoint, JSON.stringify(obj), {headers: header_custom})
  }

  delete(varId: string){
    return this.http.delete<Risultato>(`${this.endPoint}/${varId}`)
  }

}
