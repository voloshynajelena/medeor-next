import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationPopupDataInterface } from 'src/app/core/confirmation-popup/confirmation-popup-data.interface';

@Component({
    selector: 'app-confirmation-popup',
    templateUrl: './confirmation-popup.component.html',
    styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent {
    // ########################################

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: ConfirmationPopupDataInterface,
        private dialogRef: MatDialogRef<ConfirmationPopupComponent>
    ) {}

    // ########################################

    public close(): void {
        this.dialogRef.close(false);
    }

    public accept(): void {
        this.dialogRef.close(true);
    }

    // ########################################
}
