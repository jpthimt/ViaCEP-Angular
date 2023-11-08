import { Component } from '@angular/core';
import { Endereco } from '../endereco';
import { ActivatedRoute, Router } from '@angular/router';
import { CepServiceService } from '../cep-service.service';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css'],
})
export class EnderecoFormComponent {
  endereco: Endereco;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cepService: CepServiceService
  ) {
    this.endereco = new Endereco();
  }

  consultaCep(valor: any, form: any) {
    // console.log('teste')
    console.log(valor);
    this.cepService
      .buscar(valor)
      .subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados: any, form: any) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf,
      ddd: dados.ddd,
    });
  }
  
  onSubmit() {
    this.cepService
      .save(this.endereco)
      .subscribe((result) => this.gotoEnderecoList());
      console.log(this.endereco);
  }

  gotoEnderecoList() {
    this.router.navigate(['/enderecos']);
  }
}
