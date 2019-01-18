import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() openSidebar: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('menu') menu: MatIcon;

  onOpenSidebar() {
    this.menu._elementRef.nativeElement.blur();
    this.openSidebar.emit();
  }
}
