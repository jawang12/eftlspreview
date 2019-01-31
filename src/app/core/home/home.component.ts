import { Component, OnInit } from '@angular/core';
import { fadeInDownAnimation, fadeOutDownAnimation } from 'angular-animations';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from './video-modal.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInDownAnimation(), fadeOutDownAnimation({ delay: 600 })]
})
export class HomeComponent implements OnInit {
  services = [
    'Bookkeeping',
    'Tax Returns',
    'Sales Tax',
    'Payroll Tax',
    'Compliance',
    'Accounting'
  ];
  interval = 0;
  timer: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.timer = setInterval(() => {
      if (this.interval % 2) {
        this.services.shift();
      }
      this.interval++;
      if (this.services.length === 1) {
        clearInterval(this.timer);
      }
    }, 1500);
  }

  openVideoModal() {
    this.dialog.open(VideoModalComponent, {
      restoreFocus: false
    });
  }
}
