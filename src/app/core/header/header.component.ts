import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() openSidebar: EventEmitter<void> = new EventEmitter<void>();

  services = [
    'Bookkeeping',
    'Sales Tax',
    'Payroll Tax',
    'Tax Returns',
    'Government Notices',
    'Lookback Services'
  ];
  resources = ['FAQs', 'Glossary', 'Blog', 'Tutorial'];
  about = ['What We Do', 'Terms and Conditions', 'Privacy Policy'];

  onOpenSidebar() {
    this.openSidebar.emit();
  }
}
