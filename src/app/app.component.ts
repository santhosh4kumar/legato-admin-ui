import { AuthenticationService } from './service/authentication.service';
import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'legato-admin-ui';

  constructor(private _authService: AuthenticationService) {
  }

  public ngOnInit() {

  }
}
