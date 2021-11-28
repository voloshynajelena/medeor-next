import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TestsService } from 'src/app/tests-constructor/tests/tests.service';
import { getDataSuccess, TestsActionsTypes } from 'src/app/tests-constructor/tests/store/tests.actions';
import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TestsPostInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';

@Injectable()
export class TestsEffects {
    // ########################################

    constructor(private actions$: Actions, private testsService: TestsService) {}

    // ########################################

    public getData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TestsActionsTypes.GET_DATA),
            mergeMap(() => {
                return this.testsService.getItems().pipe(map((items) => getDataSuccess({ items })));
            })
        )
    );

    public addItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TestsActionsTypes.ADD_ITEM),
            mergeMap((data: TestsPostInterface) => {
                return this.testsService.addItem(data).pipe(map((items) => getDataSuccess({ items })));
            })
        )
    );

    public removeItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TestsActionsTypes.REMOVE_ITEM),
            mergeMap(({ typeId }) => {
                return this.testsService.removeItem(typeId).pipe(map((items) => getDataSuccess({ items })));
            })
        )
    );

    // ########################################
}
