import { Component } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrl: './main-area.component.css'
})
export class MainAreaComponent {
  activeArea: boolean[];

  constructor(private sharedDataService: SharedDataService) {
    this.activeArea = this.sharedDataService.getActiveArea();
  }
}
