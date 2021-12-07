import { ConfirmationPopupButtonOptions } from '../core/confirmation-popup/confirmation-popup-data.interface';

export const REMOVE_ITEM_ACCEPT_BUTTON: ConfirmationPopupButtonOptions = {
    text: 'Remove',
    color: 'warn'
};
export const REMOVE_ITEM_CANCEL_BUTTON: ConfirmationPopupButtonOptions = {
    text: 'Cancel',
    color: 'basic'
};

export const REMOVE_CONFIRMATION_BUTTONS_CONFIG = {
    acceptBtn: REMOVE_ITEM_ACCEPT_BUTTON,
    cancelBtn: REMOVE_ITEM_CANCEL_BUTTON
};
