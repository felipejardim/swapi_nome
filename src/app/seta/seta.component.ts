import { Component, Input, OnInit } from '@angular/core';
import { ObterInfoService } from '../services/obter-info.service';

@Component({
  selector: 'app-seta',
  templateUrl: './seta.component.html',
  styleUrls: ['./seta.component.css']
})
export class SetaComponent implements OnInit {

  constructor(private infos:ObterInfoService) { }
  @Input() voltar:string = "false";
  

  ngOnInit(): void {
  }

}
