import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tests-group-form',
    templateUrl: './tests-group-form.component.html',
    styleUrls: ['./tests-group-form.component.scss']
})
export class TestsGroupFormComponent implements OnInit {

    public toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    constructor() {}

    ngOnInit(): void {}
}
