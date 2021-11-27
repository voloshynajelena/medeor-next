import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TestsService } from 'src/app/tests-constructor/tests/tests.service';
import { getDataSuccess, TestsActionsTypes } from 'src/app/tests-constructor/tests/store/tests.actions';
import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class TestsEffects {
    // ########################################

    constructor(private actions$: Actions, private testsService: TestsService) {}

    // ########################################

    public getData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TestsActionsTypes.GET_DATA),
            mergeMap(() => {
                return this.testsService.getItems().pipe(map((data) => getDataSuccess({ items: data })));
            })
        )
    );

    // ########################################
}
