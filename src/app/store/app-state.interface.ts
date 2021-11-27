import { AuthState } from '../authorization/store/auth.reducer';
import { TestsState } from 'src/app/tests-constructor/tests/store/tests.reducer';

export interface AppState {
    auth: AuthState;
    tests: TestsState;
}
