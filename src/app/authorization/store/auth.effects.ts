import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthActionsTypes, checkAuth, checkAuthComplete, loginComplete, logout, logoutComplete } from './auth.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
    // ########################################

    constructor(private actions$: Actions, private router: Router, private authService: AuthService) {}

    // ########################################

    public login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActionsTypes.LOGIN),
            switchMap(({ login, pass }) => {
                return this.authService.signIn(login, pass).pipe(
                    tap(({ token, userId }) => {
                        localStorage.setItem(AuthService.AUTHENTICATION_TOKEN, token);
                        localStorage.setItem(AuthService.USER_ID, userId);
                    }),
                    map(({ token, userId }) => {
                        return checkAuth();
                    })
                );
            })
        )
    );

    public checkAuth$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActionsTypes.CHECK_AUTH),
            map(() => {
                const isAuth = !!localStorage.getItem(AuthService.AUTHENTICATION_TOKEN);
                const userId = localStorage.getItem(AuthService.USER_ID) || undefined;

                if (isAuth) {
                    this.router.navigate(['/app']);
                }

                return checkAuthComplete({
                    isAuth,
                    userId
                });
            })
        )
    );

    public checkAuthComplete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActionsTypes.CHECK_AUTH_COMPLETE),
            switchMap(({ isAuth, userId }) => {
                if (isAuth) {
                    return this.authService.getUserData().pipe(
                        map((profile) => {
                            return loginComplete({ profile, isAuth, userId });
                        })
                    );
                }

                return of(logout());
            })
        )
    );

    public logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActionsTypes.LOGOUT),
            map(() => {
                return logoutComplete();
            })
        )
    );

    public logoutComplete$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActionsTypes.LOGOUT),
                map(() => {
                    localStorage.removeItem(AuthService.AUTHENTICATION_TOKEN);
                    localStorage.removeItem(AuthService.USER_ID);

                    // const exceptions = ['/registration', '/password'];
                    // const isRedirect = !exceptions.some((exc) => location.pathname.includes(exc));

                    // if (isRedirect) {
                    this.router.navigate(['/login']);
                    // }
                })
            ),
        { dispatch: false }
    );

    // ########################################
}
