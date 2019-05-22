import { TestBed } from '@angular/core/testing';

import { GatewayconfigservicesService } from './gatewayconfigservices.service';

describe('GatewayconfigservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GatewayconfigservicesService = TestBed.get(GatewayconfigservicesService);
    expect(service).toBeTruthy();
  });
});
