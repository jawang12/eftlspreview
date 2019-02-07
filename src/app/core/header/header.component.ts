import { DemoFormModalComponent } from './../home/demo-form-modal-component';
import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  Input
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isScrolling: boolean;
  @Output() openSidebar: EventEmitter<void> = new EventEmitter<void>();
  @Output() scrollToFeatures: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('menu') menu: MatIcon;

  constructor(private dialog: MatDialog) {}

  onOpenSidebar() {
    this.menu._elementRef.nativeElement.blur();
    this.openSidebar.emit();
  }

  onOpenForm() {
    this.dialog.open(DemoFormModalComponent, {
      panelClass: 'form-modal',
      restoreFocus: false
    });
  }

  onScrollToFeatures() {
    this.scrollToFeatures.emit();
  }
}
