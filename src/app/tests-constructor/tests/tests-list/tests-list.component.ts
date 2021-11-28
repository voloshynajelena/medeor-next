import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { TestsState } from 'src/app/tests-constructor/tests/store/tests.reducer';
import { Store } from '@ngrx/store';
import { clearData, getData, removeItem } from 'src/app/tests-constructor/tests/store';
import { selectTestsItems } from 'src/app/tests-constructor/tests/store/tests.selectors';
import { TestsRestInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';
import { ConfirmationPopup } from 'src/app/core/confirmation-popup/confirmation-popup';
import { TESTS_EDIT } from 'src/app/tests-constructor/tests-constructor.tokens';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-tests-list',
    templateUrl: './tests-list.component.html',
    styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent implements OnInit, OnDestroy {
    // ########################################

    public data = this.store.select(selectTestsItems);

    public displayedColumns = ['code', 'title', 'description', 'actions'];

    // ########################################

    constructor(
        @Inject(TESTS_EDIT) public testsEditData: Subject<TestsRestInterface | null>,
        private store: Store<TestsState>,
        private confirmationPopup: ConfirmationPopup
    ) {
        this.store.dispatch(getData());
    }

    // ########################################

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.store.dispatch(clearData());
    }

    // ########################################

    public edit(item: TestsRestInterface): void {
        this.testsEditData.next(item);
    }

    public remove(item: TestsRestInterface): void {
        console.log(item);
        this.confirmationPopup
            .open({ title: 'Are you want to remove test?', text: `[${item.code}] ${item.title.en}`, acceptBtnText: 'Remove' })
            .subscribe((deleting) => {
                if (deleting) {
                    this.store.dispatch(removeItem({ typeId: item.typeId }));
                }
            });
    }

    // ########################################
}
