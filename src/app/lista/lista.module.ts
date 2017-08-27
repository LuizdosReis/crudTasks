import { ListaComponent } from './lista.component';
import { NgModule} from '@angular/core';
import { RouterModule }  from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ListaComponent
  ]
})
export class ListaModule { }
