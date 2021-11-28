import { AuthEffects, authReducer } from '../authorization/store';
import { TestsEffects, testsReducer } from 'src/app/tests-constructor/tests/store';
import { TestsGroupEffects, testsGroupReducer } from 'src/app/tests-constructor/tests-group/store';

export const appReducer = {
    auth: authReducer,
    tests: testsReducer,
    testsGroup: testsGroupReducer
};

export const appEffects = [AuthEffects, TestsEffects, TestsGroupEffects];
