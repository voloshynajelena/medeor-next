import { AuthState } from '../authorization/store/auth.reducer';

export interface AppState {
    auth: AuthState;
}
