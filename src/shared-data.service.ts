// shared-data.service.ts

import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
  export class SharedDataService {
    activeArea: boolean[] = [false, false];
  
    constructor() { }
   
    setActiveArea(index: number, value: boolean): void {
      this.activeArea[index] = value;
      console.log(this.activeArea)
    }
    reSet():void{
        this.setActiveArea(0, false);
        this.setActiveArea(1, false);
    }
  
    getActiveArea(): boolean[] {
      return this.activeArea;
    }
  }