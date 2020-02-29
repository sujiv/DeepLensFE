import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatOverviewComponent } from './threat-overview.component';

describe('ThreatOverviewComponent', () => {
  let component: ThreatOverviewComponent;
  let fixture: ComponentFixture<ThreatOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreatOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreatOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
