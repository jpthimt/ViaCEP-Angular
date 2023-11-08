import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoListComponent } from './endereco-list/endereco-list.component';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';

const routes: Routes = [
  {path: 'enderecos', component: EnderecoListComponent},
  {path: 'addendereco', component: EnderecoFormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
