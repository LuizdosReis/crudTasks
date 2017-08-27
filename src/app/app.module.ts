import { TarefaService } from './shared/tarefa.service';
import { ListaModule } from './lista/lista.module';
import { CadastroModule } from './cadastro/cadastro.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CadastroModule,
    ListaModule
  ],
  providers: [
    TarefaService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
