import { Action, createReducer, on } from '@ngrx/store';
import { clearData, getDataSuccess } from 'src/app/tests-constructor/tests-group/store/tests-group.actions';
import { TestsGroupRestInterface } from 'src/app/tests-constructor/tests-group/tests-group-rest.interface';

export const testsGroupFeatureName = 'testsGroup';

export interface TestsGroupState {
    items: TestsGroupRestInterface[];
}

export const initialTestsGroupState: TestsGroupState = {
    items: []
};

export const testsGroupInternal = createReducer(
    initialTestsGroupState,

    on(getDataSuccess, (state, {items}) => {
        return {
            ...state,
            items: [...items]
        };
    }),

    on(clearData, () => initialTestsGroupState)
);

export function testsGroupReducer(state: TestsGroupState | undefined, action: Action): any {
    return testsGroupInternal(state, action);
}
