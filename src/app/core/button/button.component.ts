import { Component, Input } from '@angular/core';
import { ButtonColor, ButtonSize } from 'src/app/core/button/button.configuration';

@Component({
    selector: 'mn-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    // ########################################

    @Input() public color: ButtonColor;
    @Input() public size: ButtonSize;

    @Input() public iconLeft: string;
    @Input() public iconRight: string;

    @Input() public iconButton: string;

    @Input() public disabled: boolean;

    // ########################################

    constructor() {}

    // ########################################

    public get colorClassName(): string {
        switch (this.color) {
            case 'primary': return 'mn-button_color_primary';
            case 'warning': return 'mn-button_color_warning';
            case 'danger': return 'mn-button_color_danger';
            default: return 'mn-button_color_basic';
        }
    }

    public get sizeClassName(): string {
        switch (this.size) {
            case 'small': return 'mn-button_size_small';
            case 'default': return 'mn-button_size_default';
            case 'large': return 'mn-button_size_large';
            default: return 'mn-button_size_default';
        }
    }

    public get iconButtonClassName(): string {
        return this.iconButton ? 'mn-button-icon' : '';
    }

    // ########################################
}
