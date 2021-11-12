import {createAction, props} from '@ngrx/store';
import {AuthState} from './auth.reducer';

export const enum AuthActionsTypes {
    CHECK_AUTH = '[Auth] Check Auth',
    CHECK_AUTH_COMPLETE = '[Auth] Check Auth Complete',

    LOGIN = '[Auth] Login',
    LOGIN_COMPLETE = '[Auth] Login Complete',

    LOGOUT = '[Auth] logout',
    LOGOUT_COMPLETE = '[Auth] logout complete'
}

export const login = createAction(AuthActionsTypes.LOGIN, props<{ login: string; pass: string }>());
export const loginComplete = createAction(AuthActionsTypes.LOGIN_COMPLETE, props<AuthState>());

export const checkAuth = createAction(AuthActionsTypes.CHECK_AUTH);
export const checkAuthComplete = createAction(AuthActionsTypes.CHECK_AUTH_COMPLETE, props<{ isAuth: boolean; userId?: string }>());

export const logout = createAction(AuthActionsTypes.LOGOUT);
export const logoutComplete = createAction(AuthActionsTypes.LOGOUT_COMPLETE);
