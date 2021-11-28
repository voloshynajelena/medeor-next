import { createAction, props } from '@ngrx/store';
import { TestsState } from 'src/app/tests-constructor/tests/store/tests.reducer';
import { TestsPostInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';

export enum TestsActionsTypes {
    GET_DATA = '[Tests] Get Data',
    GET_DATA_SUCCESS = '[Tests] Get Data Success',

    CLEAR_DATA = '[Tests] Clear Data',

    ADD_ITEM = '[Tests] Add item',
    REMOVE_ITEM = '[Tests] Remove item'
}

export const getData = createAction(TestsActionsTypes.GET_DATA);
export const getDataSuccess = createAction(TestsActionsTypes.GET_DATA_SUCCESS, props<TestsState>());

export const clearData = createAction(TestsActionsTypes.CLEAR_DATA);

export const addItem = createAction(TestsActionsTypes.ADD_ITEM, props<TestsPostInterface>());

export const removeItem = createAction(TestsActionsTypes.REMOVE_ITEM, props<{ typeId: string }>());
