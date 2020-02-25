import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalThreatListComponent } from './historical-threat-list.component';

describe('HistoricalThreatListComponent', () => {
  let component: HistoricalThreatListComponent;
  let fixture: ComponentFixture<HistoricalThreatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalThreatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalThreatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
