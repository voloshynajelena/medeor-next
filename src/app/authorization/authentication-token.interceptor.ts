import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthenticationTokenInterceptor implements HttpInterceptor{
    // ########################################

    constructor() {}

    // ########################################

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            url: 'https://api-medeor.herokuapp.com' + request.url
        });
        
        return next.handle(request);
    }

    // ########################################
}
