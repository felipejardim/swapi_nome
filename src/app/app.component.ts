import { Component, OnInit } from '@angular/core';
import { ObterInfoService } from './services/obter-info.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private infos:ObterInfoService){ }
  
  title = 'Swapi';
  nome: string = " ... ";
  id:number = 1;

  trocaNome(sinal:number, tentativa:number = 3): void{
    this.id += sinal;
    this.infos.retornaNome(this.id)
      .then(res => { this.nome = res.toString(); })
      .catch(e => { if(tentativa>0) this.trocaNome(sinal, tentativa--); else console.log(e); })
  }

  ngOnInit(): void {
    this.infos.retornaNome().then(res => this.nome = res.toString())
  }
}
