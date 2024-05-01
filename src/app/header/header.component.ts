import { Component } from '@angular/core';
import { HeaderButton } from '../types';
import { headerButtonList } from '../headerButton';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  click: boolean[] = [false,false];
  buttons:HeaderButton[]=[];
  ngOnInit(){
    this.buttons=headerButtonList;
  }
  
}


