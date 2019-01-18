import { Component } from '@angular/core';
import { navList, NavItem } from './util/nav-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navList: NavItem[] = navList;
}
