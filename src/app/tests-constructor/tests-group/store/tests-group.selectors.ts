import { createFeatureSelector, createSelector } from '@ngrx/store';
import { testsGroupFeatureName, TestsGroupState } from 'src/app/tests-constructor/tests-group/store/tests-group.reducer';

export const getTestsGroupFeatureState = createFeatureSelector<any>(testsGroupFeatureName);

export const selectTestsGroupItems = createSelector(getTestsGroupFeatureState, (state: TestsGroupState) => state.items);
