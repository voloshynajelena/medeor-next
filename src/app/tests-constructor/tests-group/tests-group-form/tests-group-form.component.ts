import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.interface';
import { Observable } from 'rxjs';
import { selectTestsItemsCode } from 'src/app/tests-constructor/tests/store/tests.selectors';

@Component({
    selector: 'app-tests-group-form',
    templateUrl: './tests-group-form.component.html',
    styleUrls: ['./tests-group-form.component.scss']
})
export class TestsGroupFormComponent implements OnInit {
    // public toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    // ########################################

    public testIdList: Observable<string[]> = this.store.select(selectTestsItemsCode);

    // ########################################

    constructor(private store: Store<AppState>) {}

    // ########################################

    ngOnInit(): void {}
}
