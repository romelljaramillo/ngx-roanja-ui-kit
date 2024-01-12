import { TestBed } from '@angular/core/testing';

import { NgxRjUiKitService } from './ngx-rj-ui-kit.service';

describe('NgxRjUiKitService', () => {
  let service: NgxRjUiKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRjUiKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
