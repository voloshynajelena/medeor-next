import { createFeatureSelector, createSelector } from '@ngrx/store';
import { testsFeatureName, TestsState } from 'src/app/tests-constructor/tests/store/tests.reducer';

export const getTestsFeatureState = createFeatureSelector<any>(testsFeatureName);

export const selectTestsItems = createSelector(getTestsFeatureState, (state: TestsState) => state.items);
export const selectTestsItemsCode = createSelector(getTestsFeatureState, (state: TestsState) => state.items.map((item) => item.code));
