import { Component } from '@angular/core';
import { Project } from '../types';
import { projectList } from '../projects';

@Component({
  selector: 'app-father-project',
  templateUrl: './father-project.component.html',
  styleUrl: './father-project.component.css'
})
export class FatherProjectComponent {
  projects: Project[]=[];
  ngOnInit(): void {
    this.projects=projectList;
  }

 

}
