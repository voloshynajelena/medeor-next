import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    // ########################################

    public formGroup = new FormGroup({
        login: new FormControl(''),
        password: new FormControl(''),
    });

    // ########################################

    constructor(private authService: AuthService) {}

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
        const login = this.loginCtrl.value;
        const pass = this.passwordCtrl.value;

        this.authService.signIn(login, pass).subscribe((data) => {
            if (data.token) {
                localStorage.setItem(AuthService.AUTHENTICATION_TOKEN, data.token);
            }
        });
    }

    // ########################################
}
