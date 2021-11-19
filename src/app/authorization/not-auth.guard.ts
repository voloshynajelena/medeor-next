import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './store/auth.reducer';
import { Observable } from 'rxjs';
import { selectIsAuth } from './store/auth.selectors';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NotAuthGuard implements CanActivate, CanActivateChild {
    // ########################################

    constructor(private router: Router, private store: Store<AuthState>) {}

    // ########################################

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.select(selectIsAuth).pipe(
            map((isAuth) => {
                if (isAuth) {
                    this.router.navigate(['/app']);

                    return false;
                } else {
                    return true;
                }
            })
        );
    }

    // ########################################

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(childRoute, state);
    }

    // ########################################
}
