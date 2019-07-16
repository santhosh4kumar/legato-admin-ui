import { UserComponent } from './views/user/user.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard]
}, {
  path: 'dashboard',
  component: HomeComponent,
  canActivate: [AuthGuard]
}, {
  path: 'users',
  component: UserListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'users/:id',
  component: UserComponent,
  canActivate: [AuthGuard]
}, {
  path: 'login',
  component: LoginComponent
},
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
