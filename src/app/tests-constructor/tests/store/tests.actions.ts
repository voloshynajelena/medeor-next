import { createAction, props } from '@ngrx/store';
import { TestsState } from 'src/app/tests-constructor/tests/store/tests.reducer';

export enum TestsActionsTypes {
    GET_DATA = '[Tests] Get Data',
    GET_DATA_SUCCESS = '[Tests] Get Data Success',

    CLEAR_DATA = '[Tests] Clear Data',

    RESTART_DATA = '[Tests] Restart Data',
    RESTART_DATA_SUCCESS = '[Tests] Restart Data Success'
}

export const getData = createAction(TestsActionsTypes.GET_DATA);
export const getDataSuccess = createAction(TestsActionsTypes.GET_DATA_SUCCESS, props<TestsState>());

export const clearData = createAction(TestsActionsTypes.CLEAR_DATA);
