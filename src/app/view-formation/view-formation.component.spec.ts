import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormationComponent } from './view-formation.component';

describe('ViewFormationComponent', () => {
  let component: ViewFormationComponent;
  let fixture: ComponentFixture<ViewFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
