import { authFeatureName, AuthState } from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAuthFeatureState = createFeatureSelector<any>(authFeatureName);

export const selectAuthInfo = createSelector(getAuthFeatureState, (state: AuthState) => state);

export const selectIsAuth = createSelector(getAuthFeatureState, (state: AuthState) => state.isAuth);

export const selectUserInfo = createSelector(getAuthFeatureState, (state: AuthState) => state.profile);
