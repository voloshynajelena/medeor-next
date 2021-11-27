import { Component, OnInit } from '@angular/core';
import { TestsGroupService } from 'src/app/tests-constructor/tests-group/tests-group.service';

@Component({
    selector: 'app-tests-group-list',
    templateUrl: './tests-group-list.component.html',
    styleUrls: ['./tests-group-list.component.scss']
})
export class TestsGroupListComponent implements OnInit {
    // ########################################

    constructor(private testsGroupService: TestsGroupService) {
        // this.testsGroupService.getItems().subscribe((d) => console.log(d));
    }

    // ########################################

    ngOnInit(): void {}
}
