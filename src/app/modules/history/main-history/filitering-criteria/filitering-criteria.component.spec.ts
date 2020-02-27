import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliteringCriteriaComponent } from './filitering-criteria.component';

describe('FiliteringCriteriaComponent', () => {
  let component: FiliteringCriteriaComponent;
  let fixture: ComponentFixture<FiliteringCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiliteringCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiliteringCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
