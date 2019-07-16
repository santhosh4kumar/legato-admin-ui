import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapse: string = 'open';
  menuClosed: boolean = true;
  profilePic: string = '';

  constructor(private _authService: AuthenticationService) {}

  ngOnInit() {
    this.profilePic = this._authService && this._authService.user && this._authService.user.gender == 0 ? 
      './././assets/images/male.png' : './././assets/images/female.png';
  }

  toggleCollapse() {
    this.collapse = this.collapse == 'open' ? 'closed' : 'open';
    this.menuClosed = !this.menuClosed;
  }

  logout() {
    this._authService.logout();
  }
}
