import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TestsGroupService } from 'src/app/tests-constructor/tests-group/tests-group.service';
import { getDataSuccess, TestsGroupActionsTypes } from 'src/app/tests-constructor/tests-group/store/tests-group.actions';
import { map, mergeMap } from 'rxjs/operators';
import { TestsGroupPostInterface } from 'src/app/tests-constructor/tests-group/tests-group-rest.interface';
import { ActionMessageTypeEnum } from '../../../core/action-message/action-message.interface';
import { ActionMessage } from '../../../core/action-message/action-message';

@Injectable()
export class TestsGroupEffects {
    // ########################################

    constructor(private actions$: Actions, private testsGroupService: TestsGroupService, private actionMessage: ActionMessage) {}

    // ########################################

    public getData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TestsGroupActionsTypes.GET_DATA),
            mergeMap(() => {
                return this.testsGroupService.getItems().pipe(map((items) => getDataSuccess({ items })));
            })
        )
    );

    public addItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TestsGroupActionsTypes.ADD_ITEM),
            mergeMap((data: TestsGroupPostInterface) => {
                return this.testsGroupService.addItem(data).pipe(
                    map((items) => {
                        this.actionMessage.show(`Tests group <b>${data.name.en}</b> was added`, ActionMessageTypeEnum.SUCCESS, {
                            duration: 4000
                        });

                        return getDataSuccess({ items });
                    })
                );
            })
        )
    );

    // ########################################
}
