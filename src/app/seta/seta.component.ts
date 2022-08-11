import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObterInfoService } from '../services/obter-info.service';

@Component({
  selector: 'app-seta',
  templateUrl: './seta.component.html',
  styleUrls: ['./seta.component.css']
})
export class SetaComponent implements OnInit {

  constructor(private infos:ObterInfoService) { }
  @Input() voltar:boolean = false;
  @Input() idAtual:Number = 0;

  @Output() evento = new EventEmitter<number>();

  sinal():void{
    if(!this.desabilitar())
    this.evento.emit(this.voltar ? -1 : 1);
  }
  
  desabilitar():Boolean{
    return  (this.idAtual == 1 && this.voltar) || (this.idAtual == 83 && !this.voltar)
  }

  ngOnInit(): void {
  }

}
