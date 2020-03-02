import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSelectorComponent } from './plant-selector.component';

describe('PlantSelectorComponent', () => {
  let component: PlantSelectorComponent;
  let fixture: ComponentFixture<PlantSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
