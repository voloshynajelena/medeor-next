import { TestsRestInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { clearData, getDataSuccess } from 'src/app/tests-constructor/tests/store/tests.actions';

export const testsFeatureName = 'tests';

export interface TestsState {
    items: TestsRestInterface[];
}

export const initialTestsState: TestsState = {
    items: []
};

export const testsReducerInternal = createReducer(
    initialTestsState,

    on(getDataSuccess, (state, { items }) => {
        return {
            ...state,
            items: [...items]
        };
    }),

    on(clearData, () => initialTestsState)
);

export function testsReducer(state: TestsState | undefined, action: Action): any {
    return testsReducerInternal(state, action);
}
