import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.interface';
import { logout } from 'src/app/authorization/store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    // ########################################

    constructor(private store: Store<AppState>) {}

    // ########################################

    ngOnInit(): void {}

    // ########################################

    public onLogout(): void {
        this.store.dispatch(logout());
    }

    // ########################################
}
