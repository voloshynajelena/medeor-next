import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { TEST_EDIT, TEST_CODE, TESTS_GROUP_IDS } from 'src/app/tests-constructor/tests-constructor.tokens';
import { TestsPostInterface, TestsRestInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.interface';
import { addItem, TestsActionsTypes } from 'src/app/tests-constructor/tests/store';
import { Actions, ofType } from '@ngrx/effects';
import { skip, take } from 'rxjs/operators';

@Component({
    selector: 'app-tests-form',
    templateUrl: './tests-form.component.html',
    styleUrls: ['./tests-form.component.scss']
})
export class TestsFormComponent implements OnInit, OnDestroy {
    // ########################################

    @ViewChild('testsForm') formElem: ElementRef<HTMLFormElement> | undefined;

    // ########################################

    private subscription = new Subscription();

    // ########################################

    public formGroup = new FormGroup({
        title: new FormControl('', [Validators.required]),
        code: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        unit: new FormControl('', [Validators.required]),
        min: new FormControl('', [Validators.required]),
        max: new FormControl('', [Validators.required])
    });

    public isEditMode = false;

    // ########################################

    constructor(
        @Inject(TEST_EDIT) public testsEditData: Subject<TestsRestInterface | null>,
        @Inject(TEST_CODE) public testCode: Subject<string | null>,
        @Inject(TESTS_GROUP_IDS) public testsGroupIds: Subject<string[] | null>,
        private store: Store<AppState>,
        private actions$: Actions
    ) {}

    // ########################################

    public get titleCtrl(): FormControl {
        return this.formGroup.controls.title as FormControl;
    }

    public get codeCtrl(): FormControl {
        return this.formGroup.controls.code as FormControl;
    }

    public get descriptionCtrl(): FormControl {
        return this.formGroup.controls.description as FormControl;
    }

    public get unitCtrl(): FormControl {
        return this.formGroup.controls.unit as FormControl;
    }

    public get minCtrl(): FormControl {
        return this.formGroup.controls.min as FormControl;
    }

    public get maxCtrl(): FormControl {
        return this.formGroup.controls.max as FormControl;
    }

    // ########################################

    ngOnInit(): void {
        const editDataSub = this.testsEditData.subscribe((data) => {
            this.isEditMode = !!data;

            if (data) {
                this.titleCtrl.setValue(data.title.en);
                this.codeCtrl.setValue(data.code);
                this.descriptionCtrl.setValue(data.description.en);
                this.unitCtrl.setValue(data.unit.en);
                this.minCtrl.setValue(data.refValue.min);
                this.maxCtrl.setValue(data.refValue.max);
            }
        });

        this.subscription.add(editDataSub);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    // ########################################

    public onSubmit(): void {
        if (this.formGroup.valid) {
            const data: TestsPostInterface = {
                title: { en: this.titleCtrl.value },
                code: this.codeCtrl.value,
                description: { en: this.descriptionCtrl.value },
                unit: { en: this.unitCtrl.value },
                refValue: {
                    min: this.minCtrl.value,
                    max: this.maxCtrl.value
                }
            };

            if (this.isEditMode) {
            } else {
                this.actions$.pipe(ofType(TestsActionsTypes.GET_DATA_SUCCESS), take(1)).subscribe(() => this.onReset());

                this.store.dispatch(addItem(data));
            }
        }
    }

    public onReset(): void {
        this.testsEditData.next(null);
        this.formGroup.reset();
        this.formElem?.nativeElement.reset();
    }

    // ########################################
}
