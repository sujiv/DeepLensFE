import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBarChartComponent } from './history-bar-chart.component';

describe('HistoryBarChartComponent', () => {
  let component: HistoryBarChartComponent;
  let fixture: ComponentFixture<HistoryBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
