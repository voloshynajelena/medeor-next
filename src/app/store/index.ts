import { AuthEffects, authReducer } from '../authorization/store';

export const appReducer = {
    auth: authReducer
};

export const appEffects = [AuthEffects];
