import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state.interface';
import { login } from '../store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { selectAuthInfo } from 'src/app/authorization/store/auth.selectors';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    // ########################################

    public hidePassword = true;

    public isLoading = false;

    // ########################################

    private subscription = new Subscription();

    // ########################################

    public formGroup = new FormGroup({
        login: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    // ########################################

    constructor(private authService: AuthService, private store: Store<AppState>, private router: Router) {}

    // ########################################

    public get loginCtrl(): FormControl {
        return this.formGroup.controls.login as FormControl;
    }

    public get passwordCtrl(): FormControl {
        return this.formGroup.controls.password as FormControl;
    }

    // ########################################

    ngOnInit(): void {
        const authSub = this.store.select(selectAuthInfo).subscribe((authState) => {
            if (authState.isAuth) {
                this.router.navigate(['/app']);
            } else {
                this.isLoading = false;
            }
        });

        this.subscription.add(authSub);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
   }

    // ########################################

    public onSubmit(): void {
        this.formGroup.markAllAsTouched();

        if (this.formGroup.valid) {
            const email = this.loginCtrl.value;
            const pass = this.passwordCtrl.value;

            this.isLoading = true;

            this.store.dispatch(login({ login: email, pass }));
        }
    }

    // ########################################
}
