import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestsState } from 'src/app/tests-constructor/tests/store/tests.reducer';
import { Store } from '@ngrx/store';
import { clearData, getData } from 'src/app/tests-constructor/tests/store';
import { selectTestsItems } from 'src/app/tests-constructor/tests/store/tests.selectors';
import { TestsRestInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';
import { ConfirmationPopup } from 'src/app/core/confirmation-popup/confirmation-popup';

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

    constructor(private store: Store<TestsState>, private confirmationPopup: ConfirmationPopup) {
        this.store.dispatch(getData());
    }

    // ########################################

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.store.dispatch(clearData());
    }

    // ########################################

    public remove(item: TestsRestInterface): void {
        console.log(item);
        this.confirmationPopup
            .open({ title: 'Are you want to remove test?', text: `[${item.code}] ${item.title.en}`, acceptBtnText: 'Remove' })
            .subscribe((deleting) => {
                if (deleting) {}
            });
    }

    // ########################################
}
