import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  zoomInRightOnEnterAnimation,
  zoomOutRightOnLeaveAnimation
} from 'angular-animations';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  animations: [
    zoomInRightOnEnterAnimation({
      anchor: 'enter',
      duration: 500,
      delay: 800
    }),
    zoomOutRightOnLeaveAnimation({
      anchor: 'leave',
      duration: 400
    })
  ]
})
export class TestimonialComponent implements OnInit, OnDestroy {
  testimonies = ['CRSE', 'Sunrise', 'Best'];
  index = 0;
  currentTestimony = this.testimonies[this.index];
  timer: any;

  ngOnInit() {
    this.timer = setInterval(() => {
      const nextIndex = (this.index + 1) % 3;
      this.index = nextIndex;
      if (!this.index) {
        // filler to prevent last animated div from sliding down before fading out due to insertion of div above
        setTimeout(() => {
          this.currentTestimony = null;
        });
        setTimeout(() => {
          this.currentTestimony = this.testimonies[this.index];
        }, 300);
      } else {
        this.currentTestimony = this.testimonies[this.index];
      }
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
