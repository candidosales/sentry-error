
import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://9e9fd4523d784609a5fc0ebb1080592f@sentry.io/50622'
});

@Injectable({
    providedIn: 'root'
})
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}
