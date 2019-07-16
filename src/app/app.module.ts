import { PagerInterceptor } from './interceptors/pager.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ng2-tooltip-directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule, ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { UserIdleModule } from 'angular-user-idle';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './views/footer/footer.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { UserComponent } from './views/user/user.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    UserListComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    UserIdleModule.forRoot({idle: 60, timeout: 60, ping: 60}),
    ModalDialogModule.forRoot()
  ],
  providers: [
    ToastrService, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    // ,{ provide: HTTP_INTERCEPTORS, useClass: PagerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
