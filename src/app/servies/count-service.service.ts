import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountServiceService {
  private count:number=0;

  getCount(){
    return this.count;

  }
  incrementCount(){
    this.count = this.count+1;
  }
  decrementCount(){
    this.count = this.count-1;
  }
}


  