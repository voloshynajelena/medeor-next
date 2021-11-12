import { UserModel } from '../user.model';
import { Action, createReducer, on } from '@ngrx/store';
import { checkAuthComplete, loginComplete, logout } from './auth.actions';

export const authFeatureName = 'auth';

export interface AuthState {
    profile: UserModel | null;
    userId?: string;
    isAuth: boolean;
}

export const initialAuthState: AuthState = {
    profile: null,
    isAuth: false
};

export const authReducerInternal = createReducer(
    initialAuthState,

    on(checkAuthComplete, (state, payload) => {
        return {
            ...state,
            isAuth: payload.isAuth,
            userId: payload.userId
        };
    }),

    on(loginComplete, (state, authState: AuthState) => {
        return {
            ...state,
            ...authState
        };
    }),

    on(logout, (state, {}) => {
        return {
            ...state,
            profile: null,
            isAuth: false,
            userId: undefined
        };
    })
);

export function authReducer(state: AuthState | undefined, action: Action): any {
    return authReducerInternal(state, action);
}
