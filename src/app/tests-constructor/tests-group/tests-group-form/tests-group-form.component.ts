import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.interface';
import { Observable, Subject, Subscription } from 'rxjs';
import { selectTestsItemsCode } from 'src/app/tests-constructor/tests/store/tests.selectors';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { TESTS_GROUP_EDIT } from 'src/app/tests-constructor/tests-constructor.tokens';
import { TestsGroupPostInterface, TestsGroupRestInterface } from 'src/app/tests-constructor/tests-group/tests-group-rest.interface';
import { addItem, TestsGroupActionsTypes } from 'src/app/tests-constructor/tests-group/store';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-tests-group-form',
    templateUrl: './tests-group-form.component.html',
    styleUrls: ['./tests-group-form.component.scss']
})
export class TestsGroupFormComponent implements OnInit, OnDestroy {
    // ########################################

    @ViewChild('testsGroupForm') formElem: ElementRef<HTMLFormElement> | undefined;

    // ########################################

    private subscription = new Subscription();

    // ########################################

    public formGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        tests: new FormControl([])
    });

    public testIdList: Observable<string[]> = this.store.select(selectTestsItemsCode);

    public isEditMode = false;

    // ########################################

    constructor(
        @Inject(TESTS_GROUP_EDIT) public testsGroupEdit: Subject<TestsGroupRestInterface | null>,
        private store: Store<AppState>,
        private actions$: Actions
    ) {}

    // ########################################

    public get nameCtrl(): FormControl {
        return this.formGroup.controls.name as FormControl;
    }

    public get descriptionCtrl(): FormControl {
        return this.formGroup.controls.description as FormControl;
    }

    public get testsCtrl(): FormControl {
        return this.formGroup.controls.tests as FormControl;
    }

    // ########################################

    ngOnInit(): void {
        const editDataSub = this.testsGroupEdit.subscribe((data) => {
            this.isEditMode = !!data;

            if (data) {
                this.nameCtrl.setValue(data.name.en);
                this.descriptionCtrl.setValue(data.description.en);
                this.testsCtrl.setValue(data.tests.map((item) => item.typeId));
            }
        });

        this.subscription.add(editDataSub);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    // ########################################

    public onSubmit(): void {
        console.log(this.testsCtrl.value);
        if (this.formGroup.valid) {
            const data: TestsGroupPostInterface = {
                name: { en: this.nameCtrl.value },
                description: { en: this.descriptionCtrl.value },
                tests: (this.testsCtrl.value as string[]).map((code) => ({ typeId: code }))
            };

            if (this.isEditMode) {
            } else {
                this.actions$.pipe(ofType(TestsGroupActionsTypes.GET_DATA_SUCCESS), take(1)).subscribe(() => this.onReset());

                this.store.dispatch(addItem(data));
            }
        }
    }

    public onReset(): void {
        this.testsGroupEdit.next(null);
        this.formGroup.reset();
        this.formElem?.nativeElement.reset();
    }

    // ########################################
}
