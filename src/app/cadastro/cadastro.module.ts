import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CadastroComponent,
    CampoControlErroComponent
  ]
})
export class CadastroModule { }
