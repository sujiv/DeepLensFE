import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHistoryComponent } from './filter-history.component';

describe('FilterHistoryComponent', () => {
  let component: FilterHistoryComponent;
  let fixture: ComponentFixture<FilterHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
