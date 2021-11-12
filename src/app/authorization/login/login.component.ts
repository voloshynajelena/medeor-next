import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state.interface';
import { login } from '../store';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    // ########################################

    public formGroup = new FormGroup({
        login: new FormControl('voloshynajelena@gmail.com'),
        password: new FormControl('123456')
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

    ngOnInit(): void {}

    // ########################################

    public onSubmit(): void {
        const email = this.loginCtrl.value;
        const pass = this.passwordCtrl.value;

        this.store.dispatch(login({ login: email, pass }));
    }

    // ########################################
}
