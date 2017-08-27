import { TarefaService } from './../shared/tarefa.service';
import { Tarefa } from './../shared/tarefa';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tarefas: Array<Tarefa> = new Array(); 

  constructor(private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.tarefaService.getAll().subscribe(dados => this.setaDados(dados));
  }

  getall(){
    this.tarefaService.getAll().subscribe(dados => this.setaDados(dados));
  }

  conclui(tarefa){
    let index = this.tarefas.indexOf(tarefa);

    this.tarefaService.conclui(tarefa.id)
      .subscribe(dado =>  this.tarefas.splice(index,1,this.setDado(dado)));

  }

  remove(tarefa){
    this.tarefas.splice(this.tarefas.indexOf(tarefa),1);

    this.tarefaService.remove(tarefa.id)
      .subscribe(dado => dado);
  }

  setDado(dado){
    let tarefa = new Tarefa();
    tarefa.id = dado.id;
    tarefa.titulo = dado.titulo;
    tarefa.descricao = dado.descricao;
    tarefa.status = dado.status;
    tarefa.dataCriacao = new Date(dado.dataCriacao[0],dado.dataCriacao[1]-1,
      dado.dataCriacao[2],dado.dataCriacao[3],dado.dataCriacao[4],dado.dataCriacao[5]);
    if(dado.dataConclusao != null){
      tarefa.dataConclusao = new Date(dado.dataConclusao[0],dado.dataConclusao[1]-1,
        dado.dataConclusao[2],dado.dataConclusao[3],dado.dataConclusao[4],dado.dataConclusao[5]);
    }
    if(dado.dataEdicao != null){
      tarefa.dataEdicao = new Date(dado.dataEdicao[0],dado.dataEdicao[1]-1,
        dado.dataEdicao[2],dado.dataEdicao[3],dado.dataEdicao[4],dado.dataEdicao[5]);
    }
    return tarefa;
  }

  setaDados(dados){
    for(let dado of dados){
      this.tarefas.push(this.setDado(dado));
    }
  }


}
