import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export interface ActionMessageInterface {
    message: string;
    type: ActionMessageTypeEnum;
    options?: ActionMessageOptionsInterface;
}

export interface ActionMessageOptionsInterface {
    duration?: number;
    action?: string;
    verticalPosition?: MatSnackBarVerticalPosition;
    horizontalPosition?: MatSnackBarHorizontalPosition;
}

export enum ActionMessageTypeEnum {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    NORMAL = 'normal'
}
