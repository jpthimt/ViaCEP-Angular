import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnderecoListComponent } from './endereco-list/endereco-list.component';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';
import { AppRoutingModule } from './app-routing.module';
import { CepServiceService } from './cep-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EnderecoListComponent,
    EnderecoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CepServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
