import { AuthEffects, authReducer } from '../authorization/store';
import { TestsEffects, testsReducer } from 'src/app/tests-constructor/tests/store';

export const appReducer = {
    auth: authReducer,
    tests: testsReducer
};

export const appEffects = [AuthEffects, TestsEffects];
