import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestsGroupPostInterface, TestsGroupRestInterface } from 'src/app/tests-constructor/tests-group/tests-group-rest.interface';

@Injectable({ providedIn: 'root' })
export class TestsGroupService {
    // ########################################

    private static readonly TEST_GROUPS = '/testGroupTemplates';

    // ########################################

    constructor(private http: HttpClient) {}

    // ########################################

    public getItems(): Observable<TestsGroupRestInterface[]> {
        return this.http.get<{ data: TestsGroupRestInterface[] }>(TestsGroupService.TEST_GROUPS).pipe(map((resp) => resp.data));
    }

    public addItem(data: TestsGroupPostInterface): Observable<TestsGroupRestInterface[]> {
        return this.http.post<TestsGroupRestInterface[]>(TestsGroupService.TEST_GROUPS, data);
    }

    // ########################################
}
