import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { ActionMessageInterface, ActionMessageTypeEnum } from 'src/app/core/action-message/action-message.interface';

@Component({
    selector: 'app-action-message',
    templateUrl: './action-message.component.html',
    styleUrls: ['./action-message.component.scss']
})
export class ActionMessageComponent {
    // ########################################

    public actionMessageTypeEnum = ActionMessageTypeEnum;

    // ########################################

    constructor(
        public snackBarRef: MatSnackBarRef<ActionMessageComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: ActionMessageInterface
    ) {}

    // ########################################
}
