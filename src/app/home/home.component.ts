import { Component, OnInit } from '@angular/core';
import { TestService } from '../providers/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'sentry-error';
  planets = [];

  constructor(private testService: TestService) {

  }

  ngOnInit() {
    this.testService
        .getPlanets()
        .subscribe(planets => {
            this.planets = planets.results;
        });
  }
}

















