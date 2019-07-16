import { Router } from '@angular/router';
import { UserComponent } from './../user/user.component';
import { PropertyService } from './../../service/property.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PagerService } from './../../service/pager.service';
import { AuthenticationService } from './../../service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { User } from './../../model/user.model';
import { UserService } from './../../service/user.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'ngx-modal-dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  loading = false;
  page: number = 1;
  users: any[];
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private toastrService: ToastrService,
    private propertyService: PropertyService,
    private router: Router) {
      debugger;
     }

  ngOnInit() {
    debugger;
    this.propertyService.apiUrl;
    this.searchForm = this.formBuilder.group({
      searchText: [''],
      criteria: ['username', Validators.required]
    });
    this.userService.getUsersByManagerId(this.authenticationService.user.id)
      .subscribe(response => {
        this.loading = false;
        this.users = response.data;
      }, error => {
        if (error.status === 0) {
          this.toastrService.error('Application server may not be running!', 'Error Message');
        } else {
          this.toastrService.error('Failed to load users!', 'Error Message');
        }
        this.loading = false;
      });
  }

  onSearchClick() {

  }

  onEditClick(id) {
    this.userService.selectedId = id;
    this.router.navigate(['/users', { id: id}]);
  }
}