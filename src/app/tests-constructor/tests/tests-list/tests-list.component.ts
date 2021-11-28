import { Component, Inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearData, getData, removeItem } from 'src/app/tests-constructor/tests/store';
import { selectTestsItems } from 'src/app/tests-constructor/tests/store/tests.selectors';
import { TestsRestInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';
import { ConfirmationPopup } from 'src/app/core/confirmation-popup/confirmation-popup';
import { TEST_EDIT, TEST_CODE, TESTS_GROUP_IDS } from 'src/app/tests-constructor/tests-constructor.tokens';
import { Subject } from 'rxjs';
import { AppState } from 'src/app/store/app-state.interface';

@Component({
    selector: 'app-tests-list',
    templateUrl: './tests-list.component.html',
    styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent implements OnDestroy {
    // ########################################

    public data = this.store.select(selectTestsItems);

    public displayedColumns = ['code', 'title', 'description', 'actions'];

    // ########################################

    constructor(
        @Inject(TEST_EDIT) public testsEdit: Subject<TestsRestInterface | null>,
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

    public onEdit(item: TestsRestInterface): void {
        this.testsEdit.next(item);
    }

    public onRemove(item: TestsRestInterface): void {
        this.confirmationPopup
            .open({ title: 'Are you want to remove test?', text: `[${item.code}] ${item.title.en}`, acceptBtnText: 'Remove' })
            .subscribe((deleting) => {
                if (deleting) {
                    this.store.dispatch(removeItem({ typeId: item.typeId }));
                }
            });
    }

    public onTestCode(value: string | null): void {
        this.testCode.next(value);
    }

    // ########################################

    public isCompared(typeIds: string[], code: string): boolean {
        return typeIds.some((id) => id === code);
    }

    // ########################################
}
