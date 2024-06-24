import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component'; // Adjust the path as necessary
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'material-dash-oone';
  @ViewChild('sidenav') sidenav!: SidenavComponent; // Specify the correct type here
  isHandset$:any= Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isHandset$ = this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.sidenav.mode = 'over'; // Set sidenav mode to over for small screens
      } else {
        this.sidenav.mode = 'side'; // Set sidenav mode to side for larger screens
        this.sidenav.isOpen = true; // Ensure sidenav is open on larger screens by default
      }
    });
  }

  ngOnDestroy() {
    this.isHandset$.unsubscribe();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  closeSidenav() {
    this.sidenav.close();
  }
}
