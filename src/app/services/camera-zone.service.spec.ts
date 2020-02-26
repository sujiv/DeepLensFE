import { TestBed } from '@angular/core/testing';

import { CameraZoneService } from './camera-zone.service';

describe('CameraZoneService', () => {
  let service: CameraZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
