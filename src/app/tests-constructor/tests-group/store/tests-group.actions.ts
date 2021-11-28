import { createAction, props } from '@ngrx/store';
import { TestsGroupState } from 'src/app/tests-constructor/tests-group/store/tests-group.reducer';
import { TestsGroupPostInterface } from 'src/app/tests-constructor/tests-group/tests-group-rest.interface';

export enum TestsGroupActionsTypes {
    GET_DATA = '[Tests group] Get Data',
    GET_DATA_SUCCESS = '[Tests group] Get Data Success',

    CLEAR_DATA = '[Tests group] Clear Data',

    ADD_ITEM = '[Tests group] Add item',
    EDIT_ITEM = '[Tests group] Edit item',
    REMOVE_ITEM = '[Tests group] Remove item'
}

export const getData = createAction(TestsGroupActionsTypes.GET_DATA);
export const getDataSuccess = createAction(TestsGroupActionsTypes.GET_DATA_SUCCESS, props<TestsGroupState>());

export const clearData = createAction(TestsGroupActionsTypes.CLEAR_DATA);

export const addItem = createAction(TestsGroupActionsTypes.ADD_ITEM, props<TestsGroupPostInterface>());
export const removeItem = createAction(TestsGroupActionsTypes.REMOVE_ITEM, props<any>());
