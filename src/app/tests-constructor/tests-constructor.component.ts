import { Component, OnInit } from '@angular/core';
import { ActionMessage } from '../core/action-message/action-message';
import { ActionMessageTypeEnum } from '../core/action-message/action-message.interface';
import { ConfirmationPopup } from '../core/confirmation-popup/confirmation-popup';

@Component({
    selector: 'app-tests-constructor',
    templateUrl: './tests-constructor.component.html',
    styleUrls: ['./tests-constructor.component.scss']
})
export class TestsConstructorComponent implements OnInit {
    constructor(private am: ActionMessage, private cp: ConfirmationPopup) {
        // this.am.show('Lorem ipsum dolor', ActionMessageTypeEnum.ERROR, { action: 'close', duration: Infinity });
        // cp.open({});
    }

    ngOnInit(): void {}
}
