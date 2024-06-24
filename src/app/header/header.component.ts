import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() sidenavClose = new EventEmitter<void>();

  toggleSidenav() {
    this.sidenavToggle.emit();
  }

  closeSidenav() {
    this.sidenavClose.emit();
  }
}