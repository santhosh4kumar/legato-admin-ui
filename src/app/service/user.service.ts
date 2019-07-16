import { environment } from './../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { User } from './../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class UserService {
    apiUrl: string = environment.config.apiUrl;
    users: User[] = null;
    selectedId: number;
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(this.apiUrl + '/user/');
    }

    getUsersByManagerId(managerId: number) {
        return this.http.get<any>(this.apiUrl + '/user/' + managerId);
        // return this.http.get<any>('./assets/JSON/users.json');
    }
}