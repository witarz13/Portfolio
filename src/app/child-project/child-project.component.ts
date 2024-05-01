import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-project',
  templateUrl: './child-project.component.html',
  styleUrl: './child-project.component.css'
})
export class ChildProjectComponent {
  @Input() screenL:string='default value';
  @Input() screenS:string='default value';
  @Input() projectName:string='Project Name';
  @Input() detail:string='default value';
  @Input() bgColor:string='#FFFFFF';
  @Input() skillSet:string[]=[];
  @Input() url:string="default value"
  hover: boolean = false;
  onMouseEnter(event: MouseEvent) {
    this.hover = true;

    console.log('Mouse entered, hover:', this.hover, event);
  }
}
