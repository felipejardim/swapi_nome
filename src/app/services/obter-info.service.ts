import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ObterInfoService {

  constructor() { }

  retornaNome(id:number = 1):Promise<Object>{
    const url: string = 'https://swapi.dev/api/people/'+id;
    return axios.get(url)
      .then(res => res.data.name)
  }
}
