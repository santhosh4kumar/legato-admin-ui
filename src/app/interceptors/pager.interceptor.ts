import { PagerService } from './../service/pager.service';
import { AuthenticationService } from './../service/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { AuthenticationService } from '../_services';

@Injectable()
export class PagerInterceptor implements HttpInterceptor {
    constructor(private pagerService: PagerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add page and size to request
        let params = request.params;
        params.append('page', "" + this.pagerService.startIndex);
        params.append('limit', "" + this.pagerService.limit);
        return next.handle(request.clone({
            params: params
        }));
    }
}