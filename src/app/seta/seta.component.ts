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
  @Input() idAtual?:Number;

  @Output() evento = new EventEmitter<number>();

  sinal():void{
    this.evento.emit(this.voltar ? -1 : 1);
  }
  

  ngOnInit(): void {
  }

}
