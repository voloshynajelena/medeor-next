import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ActionMessageOptionsInterface, ActionMessageTypeEnum } from 'src/app/core/action-message/action-message.interface';
import { ActionMessageComponent } from 'src/app/core/action-message/action-message.component';

@Injectable({
    providedIn: 'root'
})
export class ActionMessage {
    // ########################################

    constructor(private snackBar: MatSnackBar) {}

    // ########################################

    public show(
        message: string,
        type: ActionMessageTypeEnum = ActionMessageTypeEnum.NORMAL,
        options?: ActionMessageOptionsInterface
    ): void {
        this.create(message, type, options);
    }

    // ########################################

    private create(
        message: string,
        type: ActionMessageTypeEnum,
        options: ActionMessageOptionsInterface = {}
    ): MatSnackBarRef<ActionMessageComponent> {
        return this.snackBar.openFromComponent(ActionMessageComponent, {
            data: { message, type, options },
            duration: options.duration || 6000,
            horizontalPosition: options.horizontalPosition || 'center',
            verticalPosition: options.verticalPosition || 'bottom'
        });
    }

    // ########################################
}
