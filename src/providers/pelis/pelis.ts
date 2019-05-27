import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PelisProvider {

  private current: any;

  constructor(public http: HttpClient) {}

  getId(){
    return this.current;
  }

  setId(id: number){
    this.current = id;
  }
}
