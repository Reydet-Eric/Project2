import { TestBed } from '@angular/core/testing';

import { ServicerecetteService } from './servicerecette.service';

describe('ServicerecetteService', () => {
  let service: ServicerecetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicerecetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
