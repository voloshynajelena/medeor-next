import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.interface';
import { logout } from 'src/app/authorization/store';
import { ConfirmationPopup } from 'src/app/core/confirmation-popup/confirmation-popup';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    // ########################################

    constructor(private store: Store<AppState>, private confirmationPopup: ConfirmationPopup) {}

    // ########################################

    public onLogout(): void {
        this.confirmationPopup.open({ title: 'Are you sure you want tot Logout?', acceptBtnText: 'Logout' }).subscribe((accepted) => {
            if (accepted) {
                this.store.dispatch(logout());
            }
        });
    }

    // ########################################
}
