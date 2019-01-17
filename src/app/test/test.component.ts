import { Component, OnInit } from '@angular/core';
import { TestService } from '../providers/test.service';
import { SentryError } from '@sentry/core';
import { SentryErrorHandler } from '../providers/sentry-error-handler.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  starships = [];

  constructor(private testService: TestService,
              private sentryErrorHandler: SentryErrorHandler) {

  }

  ngOnInit() {
    this.testService
        .getStarships()
        .subscribe(starships => {
            this.starships = starships.results;
        });
  }

  throwError() {
    // SentryError.captureStackTrace(new Error('Error'));
    // this.sentryErrorHandler.handleError(new Error('Error'));
    throw new Error('Angular test');
  }
}
