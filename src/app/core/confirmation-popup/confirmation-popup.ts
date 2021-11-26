import { Injectable } from '@angular/core';
import { ConfirmationPopupDataInterface } from 'src/app/core/confirmation-popup/confirmation-popup-data.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from 'src/app/core/confirmation-popup/confirmation-popup.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationPopup {
    // ########################################

    constructor(private matDialog: MatDialog) {}

    // ########################################

    public open(data: ConfirmationPopupDataInterface): Observable<boolean> {
        return this.matDialog
            .open(ConfirmationPopupComponent, { data, panelClass: 'confirmation-popup', disableClose: true, autoFocus: false })
            .afterClosed();
    }

    // ########################################
}
