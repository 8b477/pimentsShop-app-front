import { TestBed } from '@angular/core/testing';

import { SharedArticleService } from './shared-article.service';

describe('SharedArticleService', () => {
  let service: SharedArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
