import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../util/nav-list';
import { Router } from '@angular/router';
import { staggeredListStateTrigger, expandedStateTrigger } from './animation';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
  animations: [staggeredListStateTrigger, expandedStateTrigger]
})
export class SidenavListComponent implements OnInit {
  @Input() item: NavItem;
  @Output() closeSidebar: EventEmitter<void> = new EventEmitter<void>();

  expanded = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // pre expand the sub list
    let currentPath: string;
    if (window.location.pathname.length > 1) {
      currentPath = window.location.pathname.match(/[a-z]+/g).join(' ');
    }
    if (this.item.subList && currentPath) {
      const hasListName = this.item.subList.some(
        (subListItem: NavItem) => subListItem.name.toLowerCase() === currentPath
      );
      if (hasListName) {
        this.expanded = true;
      }
    }
  }

  onItemExpand() {
    if (this.item.subList && !this.expanded) {
      this.expanded = true;
    } else if (this.item.subList && this.expanded) {
      this.expanded = false;
    } else {
      this.onCloseSidebar();
      this.router.navigate([this.item.route]);
    }
  }

  onCloseSidebar() {
    this.closeSidebar.emit();
  }
}
