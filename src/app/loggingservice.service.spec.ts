/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoggingserviceService } from './loggingservice.service';

describe('LoggingserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggingserviceService]
    });
  });

  it('should ...', inject([LoggingserviceService], (service: LoggingserviceService) => {
    expect(service).toBeTruthy();
  }));
});
