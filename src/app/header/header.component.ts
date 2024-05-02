import { Component } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  click: boolean[] = [false,false];
  constructor(private sharedDataService: SharedDataService) {}

  setActiveArea(index: number, value: boolean): void {
    this.sharedDataService.setActiveArea(index, value);
  }
 
 
  
}


