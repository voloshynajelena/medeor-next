import { AuthState } from '../authorization/store/auth.reducer';
import { TestsState } from 'src/app/tests-constructor/tests/store/tests.reducer';
import { TestsGroupState } from 'src/app/tests-constructor/tests-group/store/tests-group.reducer';

export interface AppState {
    auth: AuthState;
    tests: TestsState;
    testsGroup: TestsGroupState;
}
