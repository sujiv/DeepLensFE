import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbuttonComponent } from './sbutton.component';

describe('SbuttonComponent', () => {
  let component: SbuttonComponent;
  let fixture: ComponentFixture<SbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
