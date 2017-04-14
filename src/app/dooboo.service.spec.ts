import { TestBed, inject } from '@angular/core/testing';

import { DoobooService } from './dooboo.service';

describe('DoobooService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoobooService]
    });
  });

  it('should ...', inject([DoobooService], (service: DoobooService) => {
    expect(service).toBeTruthy();
  }));
});
