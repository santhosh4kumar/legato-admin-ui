import { Router } from '@angular/router';
import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public loggedIn: boolean = false;
    public user: User = null;

    constructor(private http: HttpClient, private _router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.loggedIn = this.currentUserSubject.value ? true : false;
        if(this.loggedIn) {
            this.currentUser = this.currentUserSubject.asObservable();
            this.user = this.currentUserSubject.value;
        }
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>('/users/authenticate', { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    this.loggedIn = this.currentUserSubject.value ? true : false;
                    this.user = this.currentUserSubject.value;
                }
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.loggedIn = false;
        this.user = null;
        this._router.navigateByUrl('login');
    }
}