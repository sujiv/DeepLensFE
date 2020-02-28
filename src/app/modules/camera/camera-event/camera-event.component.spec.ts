import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraEventComponent } from './camera-event.component';

describe('CameraEventComponent', () => {
  let component: CameraEventComponent;
  let fixture: ComponentFixture<CameraEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
