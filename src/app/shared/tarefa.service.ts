import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class TarefaService {

  private url: string = "https://testesuperoti.herokuapp.com/tasks/";
  private  headers = new Headers({'Content-Type': 'application/json'})
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http : Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(dados => dados.json());
  }

  getTarefa(id){
    return this.http.get(this.url+id).map(res => res.json());
  }

  update(tarefa){
    return this.http.put(this.url,JSON.stringify(tarefa),this.options)
    .map(dados => dados.json());
  }

  remove(id){
    return this.http.delete(this.url+id);
  }

  conclui(id){
    return this.http.put(this.url+"conclui/"+id,JSON.stringify(id),this.options)
      .map(res => res.json());
  }

  add(tarefa){
    return this.http.post(this.url,JSON.stringify(tarefa),this.options)
    .map(dados => dados.json());
  }

}
