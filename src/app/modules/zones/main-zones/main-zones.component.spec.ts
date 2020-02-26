import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainZonesComponent } from './main-zones.component';

describe('MainZonesComponent', () => {
  let component: MainZonesComponent;
  let fixture: ComponentFixture<MainZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
