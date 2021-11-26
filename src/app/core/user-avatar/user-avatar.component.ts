import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.interface';
import { selectUserInfo } from 'src/app/authorization/store/auth.selectors';

@Component({
    selector: 'user-avatar',
    templateUrl: './user-avatar.component.html',
    styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {
    // ########################################

    public user$ = this.store.select(selectUserInfo);

    public isHiddenImage = false;

    // ########################################

    constructor(private store: Store<AppState>) {}

    // ########################################
}
