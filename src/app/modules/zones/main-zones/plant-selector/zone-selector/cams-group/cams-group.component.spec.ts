import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamsGroupComponent } from './cams-group.component';

describe('CamsGroupComponent', () => {
  let component: CamsGroupComponent;
  let fixture: ComponentFixture<CamsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
