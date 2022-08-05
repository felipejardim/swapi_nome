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

  ngOnInit(): void {
    this.infos.retornaNome().then(res => this.nome = res.toString())
  }
}
