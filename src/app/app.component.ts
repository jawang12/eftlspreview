import { Component, NgZone, OnInit } from '@angular/core';
import { navList, NavItem } from './util/nav-list';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';
import {
  map,
  throttleTime,
  pairwise,
  distinctUntilChanged,
  take
} from 'rxjs/operators';

enum NavBarStatus {
  SCROLLING = 'scrolling',
  LOCKED = 'locked'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navList: NavItem[] = navList;
  isScrolling = false;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.scrollDispatcher
      .scrolled()
      .pipe(
        throttleTime(10),
        map((event: CdkScrollable) => {
          return event.getElementRef().nativeElement.scrollTop;
        }),
        pairwise(),
        map(
          ([y1, y2]): NavBarStatus => {
            if (y1 < y2) {
              if (y2 > 50) {
                return NavBarStatus.SCROLLING;
              } else {
                return NavBarStatus.LOCKED;
              }
              // if (y1 > y2)
            } else {
              if (y2 > 50) {
                return NavBarStatus.SCROLLING;
              } else {
                return NavBarStatus.LOCKED;
              }
            }
          }
        ),
        distinctUntilChanged()
      )
      .subscribe(status => {
        console.log(status);
        this.ngZone.run(
          () =>
            (this.isScrolling =
              status === NavBarStatus.SCROLLING ? true : false)
        );
      });
  }

  scrollToFeatures() {}
}
