import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionMessageComponent } from 'src/app/core/action-message/action-message.component';
import { MatButtonModule } from '@angular/material/button';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [ActionMessageComponent, UserAvatarComponent, ConfirmationPopupComponent, ButtonComponent],
    exports: [
        UserAvatarComponent,
        ButtonComponent
    ],
    imports: [CommonModule, MatButtonModule, MatDialogModule]
})
export class CoreModule {}
