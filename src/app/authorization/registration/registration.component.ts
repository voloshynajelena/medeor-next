import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/authorization/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/authorization/store/auth.reducer';
import { login } from 'src/app/authorization/store';
import { selectIsAuth } from 'src/app/authorization/store/auth.selectors';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    // ########################################

    public hidePassword = true;
    public hideConfirmPassword = true;

    public isLoading = false;

    public formGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required]),
        location: new FormControl(''),
        photo: new FormControl(''),
        pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    // ########################################

    constructor(private authService: AuthService, private snackbar: MatSnackBar, private store: Store<AuthState>, private router: Router) {}

    // ########################################

    get nameCtrl(): FormControl {
        return this.formGroup.controls.name as FormControl;
    }

    get surnameCtrl(): FormControl {
        return this.formGroup.controls.surname as FormControl;
    }

    get emailCtrl(): FormControl {
        return this.formGroup.controls.email as FormControl;
    }

    get phoneCtrl(): FormControl {
        return this.formGroup.controls.phone as FormControl;
    }

    get locationCtrl(): FormControl {
        return this.formGroup.controls.location as FormControl;
    }

    get photoCtrl(): FormControl {
        return this.formGroup.controls.photo as FormControl;
    }

    get passCtrl(): FormControl {
        return this.formGroup.controls.pass as FormControl;
    }

    get confirmCtrl(): FormControl {
        return this.formGroup.controls.confirm as FormControl;
    }

    // ########################################

    ngOnInit(): void {}

    // ########################################

    public onSubmit(): void {
        this.formGroup.markAllAsTouched();

        if (this.formGroup.valid) {
            const email = this.emailCtrl.value;
            const pass = this.passCtrl.value;

            this.isLoading = true;

            this.authService.register(this.formGroup.value).subscribe((user) => {
                const error = (user as any).error;

                if (error) {
                    this.snackbar.open(error, 'Close', { duration: 6000 });
                    this.isLoading = false;
                } else {
                    this.store.dispatch(login({ login: email, pass }));
                }

                this.store
                    .select(selectIsAuth)
                    .pipe(
                        filter((data) => data),
                        take(1)
                    )
                    .subscribe((isAuth) => {
                        if (isAuth) {
                            this.router.navigate(['/app']);
                        }
                    });
            });
        }
    }

    // ########################################
}
