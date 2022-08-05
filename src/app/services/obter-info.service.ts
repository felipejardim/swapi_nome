import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ObterInfoService {

  constructor() { }

  retornaNome():Promise<Object>{
    const url: string = 'https://swapi.dev/api/people/1';
    return axios.get(url)
      .then(res => res.data.name)
  }
}
