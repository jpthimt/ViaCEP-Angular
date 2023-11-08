import { Component, OnInit } from '@angular/core';
import { Endereco } from '../endereco';
import { CepServiceService } from '../cep-service.service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.css']
})

export class EnderecoListComponent implements OnInit{

  enderecos: Endereco[] = [];

  constructor(private cepService: CepServiceService) {
   }

   ngOnInit(){
    this.cepService.findAll().subscribe(data => {
      this.enderecos = data;
    });
   }
}
