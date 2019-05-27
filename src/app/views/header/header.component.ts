import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  collapse: string = 'open';
  menuClosed: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  toggleCollapse() {
    this.collapse = this.collapse == 'open' ? 'closed' : 'open';
    this.menuClosed = !this.menuClosed;
  }
}
