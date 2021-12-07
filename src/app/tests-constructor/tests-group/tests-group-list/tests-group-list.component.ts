import { Component, Inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmationPopup } from 'src/app/core/confirmation-popup/confirmation-popup';
import { AppState } from 'src/app/store/app-state.interface';
import { selectTestsGroupItems } from 'src/app/tests-constructor/tests-group/store/tests-group.selectors';
import { clearData, getData } from 'src/app/tests-constructor/tests-group/store/tests-group.actions';
import { TEST_CODE, TESTS_GROUP_EDIT, TESTS_GROUP_IDS } from 'src/app/tests-constructor/tests-constructor.tokens';
import { Subject } from 'rxjs';
import { TestsGroupRestInterface } from 'src/app/tests-constructor/tests-group/tests-group-rest.interface';
import { REMOVE_CONFIRMATION_BUTTONS_CONFIG } from '../../tests-constructor.config';

@Component({
    selector: 'app-tests-group-list',
    templateUrl: './tests-group-list.component.html',
    styleUrls: ['./tests-group-list.component.scss']
})
export class TestsGroupListComponent implements OnDestroy {
    // ########################################

    public data = this.store.select(selectTestsGroupItems);

    public displayedColumns = ['title', 'description', 'actions'];

    // ########################################

    constructor(
        @Inject(TESTS_GROUP_EDIT) public testsGroupEdit: Subject<TestsGroupRestInterface | null>,
        @Inject(TEST_CODE) public testCode: Subject<string | null>,
        @Inject(TESTS_GROUP_IDS) public testsGroupIds: Subject<string[]>,
        private store: Store<AppState>,
        private confirmationPopup: ConfirmationPopup
    ) {
        this.store.dispatch(getData());
    }

    // ########################################

    ngOnDestroy(): void {
        this.store.dispatch(clearData());
    }

    // ########################################

    public onEdit(item: TestsGroupRestInterface): void {
        this.testsGroupEdit.next(item);
    }

    public onRemove(item: TestsGroupRestInterface): void {
        this.confirmationPopup
            .open({
                title: 'Are you want to remove tests group?',
                text: `[${item.typeId}] ${item.name.en}`,
                ...REMOVE_CONFIRMATION_BUTTONS_CONFIG
            })
            .subscribe((deleting) => {
                if (deleting) {
                }
            });
    }

    public onGroupTypeIds(typeIds: { typeId: string }[]): void {
        this.testsGroupIds.next(typeIds.map((item) => item.typeId));
    }

    // ########################################

    public isCompared(code: string | null, typeIds: { typeId: string }[]): boolean {
        return typeIds.some((item) => item.typeId === code);
    }

    // ########################################
}
