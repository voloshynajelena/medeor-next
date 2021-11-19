import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.interface';
import { logout } from 'src/app/authorization/store';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    // ########################################

    constructor(private store: Store<AppState>) {}

    // ########################################

    public onLogout(): void {
        this.store.dispatch(logout());
    }

    // ########################################
}
