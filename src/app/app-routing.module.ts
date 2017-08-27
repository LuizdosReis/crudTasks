import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: 'lista', component: ListaComponent },
 { path: 'cadastro', component: CadastroComponent },
 { path: 'edita/:id', component: CadastroComponent },
 { path: '', pathMatch: 'full', redirectTo: 'lista' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
