import { ButtonColor, ButtonSize } from 'src/app/core/button/button.configuration';

export interface ConfirmationPopupButtonOptions {
    text: string;
    color?: ButtonColor;
    size?: ButtonSize;
    disabled?: boolean;
    hidden?: boolean;
}

export interface ConfirmationPopupDataInterface {
    title?: string;
    text?: string;
    acceptBtn?: ConfirmationPopupButtonOptions;
    cancelBtn?: ConfirmationPopupButtonOptions;
}
