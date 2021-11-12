import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export class AuthenticationTokenInterceptor implements HttpInterceptor {
    // ########################################

    constructor() {}

    // ########################################

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem(AuthService.AUTHENTICATION_TOKEN);

        request = request.clone({
            url: 'https://api-medeor.herokuapp.com' + request.url
        });

        if (authToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${authToken}`
                }
            });
        }

        return next.handle(request);
    }

    // ########################################
}
