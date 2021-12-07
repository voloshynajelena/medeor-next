export interface ConfirmationPopupButtonOptions {
    text: string;
    color?: 'primary' | 'accent' | 'warn' | 'basic';
    disabled?: boolean;
    hidden?: boolean;
    className?: string;
}

export interface ConfirmationPopupDataInterface {
    title?: string;
    text?: string;
    acceptBtn?: ConfirmationPopupButtonOptions;
    cancelBtn?: ConfirmationPopupButtonOptions;
}
