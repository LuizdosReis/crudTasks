import { TarefaService } from './../shared/tarefa.service';
import { Tarefa } from './../shared/tarefa';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tarefa: Tarefa = new Tarefa();
  tituloPrincipal: string;
  descricaoBotao: string;

  constructor(private tarefaService: TarefaService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.params.subscribe(params => {
      id = params['id'];

      if (!id){
        this.tituloPrincipal = 'Nova Tarefa';
        this.descricaoBotao = 'Cadastrar';
        return;
      }

      this.tituloPrincipal = 'Editar Tarefa';
      this.descricaoBotao = 'Editar';

      this.tarefaService.getTarefa(id)
        .subscribe(
          tarefa => this.tarefa = tarefa);
    });
  }

  onSubmit(form){
    let result;

    this.tarefa.titulo = form.value.titulo;
    this.tarefa.descricao = form.value.descricao;

    if(this.tarefa.id){
      result = this.tarefaService.update(this.tarefa);
    }else{
      result = this.tarefaService.add(this.tarefa);
    }

    result.subscribe(data => this.router.navigate(['lista']));
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error':  this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
