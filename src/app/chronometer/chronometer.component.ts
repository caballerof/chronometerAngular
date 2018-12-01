import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnInit {
  minutes: number;
  seconds: number;
  millis: number;
  running: boolean;
  interval: any;

  constructor() {
    this.minutes = 0;
    this.seconds = 0;
    this.millis = 0;
    this.running = false;
  }

  ngOnInit() { }

  _handleStartClick() {
    if (!this.running) {
      this.interval = setInterval(() => {
        this.tick();
      }, 100);
      this.running = true;
    }
  }

  _handleStopClick() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  _handleResetClick() {
    this._handleStopClick();
    this.minutes = 0;
    this.seconds = 0;
    this.millis = 0;
    this.running = false;
  }

  tick() {
    let millis = this.millis + 1;
    let seconds = this.seconds;
    let minutes = this.minutes;
    if (millis === 10) {
      millis = 0;
      seconds += 1;
    }
    if (seconds === 60) {
      millis = 0;
      seconds = 0;
      minutes += 1;
    }

    this.millis = millis;
    this.seconds = seconds;
    this.minutes = minutes;

  }

} // End Class
