import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
    // ########################################

    constructor(private router: Router) {}

    // ########################################

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const isAuth = localStorage.getItem(
            AuthService.AUTHENTICATION_TOKEN_ITEM
        );

        if (isAuth) {
            return true;
        } else {
            this.router.navigate(['/login']);

            return false;
        }
    }

    // ########################################

    public canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        return this.canActivate(childRoute, state);
    }

    // ########################################
}
