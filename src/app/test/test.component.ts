import { Component, OnInit } from '@angular/core';
import { TestService } from '../providers/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  starships = [];

  constructor(private testService: TestService) {

  }

  ngOnInit() {
    this.testService
        .getStarships()
        .subscribe(starships => {
            this.starships = starships.results;
        });
  }

  throwError() {
    throw new Error('Angular test');
  }
}
