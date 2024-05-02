import { Component } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor(private sharedDataService: SharedDataService) {}

  reSet(): void {
    this.sharedDataService.reSet();
    console.log(this.sharedDataService.getActiveArea());
  }
}
