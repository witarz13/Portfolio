import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherProjectComponent } from './father-project.component';

describe('FatherProjectComponent', () => {
  let component: FatherProjectComponent;
  let fixture: ComponentFixture<FatherProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FatherProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
