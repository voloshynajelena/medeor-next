import { Component, OnInit } from '@angular/core';
import { MenuItemInterface } from 'src/app/layout/sidebar/menu/menu-item.interface';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    // ########################################

    public menu: MenuItemInterface[] = [
        {
            title: 'Patients list',
            path: 'patients-list',
            matIcon: 'groups'
        },
        {
            title: 'Tests constructor',
            path: 'constructor',
            matIcon: 'widgets'
        },
        {
            title: 'Norms',
            path: 'norms',
            matIcon: 'feed',
            disabled: true
        },
        {
            title: 'Settings',
            path: 'settings',
            matIcon: 'settings'
        }
    ];

    // ########################################

    constructor() {}

    // ########################################

    ngOnInit(): void {}

    // ########################################
}
