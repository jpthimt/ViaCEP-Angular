import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from './endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  private enderecosUrl: string;
  constructor(private http: HttpClient) { 
    this.enderecosUrl = 'http://localhost:8080/enderecos';
  }

  buscar(cep:String){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  public findAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.enderecosUrl);
  }

  public save(endereco: Endereco) {
    return this.http.post<Endereco>(this.enderecosUrl, endereco);
  }
}
