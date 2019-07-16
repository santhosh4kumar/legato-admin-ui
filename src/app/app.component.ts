import { PropertyService } from './service/property.service';
import { AuthenticationService } from './service/authentication.service';
import { Component } from '@angular/core';
import { UserIdleModule } from 'angular-user-idle';
import { UserIdleService } from 'angular-user-idle';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private propertyService: PropertyService, 
    private _authService: AuthenticationService,
    private userIdle: UserIdleService,
    private toastrService: ToastrService) {
  }

  public ngOnInit() {
    if(this._authService && this._authService.token) {
      //Start watching for user inactivity.
      this.userIdle.startWatching();
      // Start watching when user idle is starting.
      this.userIdle.onTimerStart().subscribe(count => {
        setTimeout(() => {
          this.toastrService.warning('Expiration', 'Your session will expire soon!', {
            tapToDismiss: false,
            timeOut: 60000
          });
        }, 0);
      });
      // Start watch when time is up.
      this.userIdle.onTimeout().subscribe(() => {
        this._authService.logout();
      });
    }
  }

  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }
}