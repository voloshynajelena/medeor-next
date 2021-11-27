import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestsRestInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TestsService {
    // ########################################

    private static readonly TESTS = '/testTemplates';

    // ########################################

    constructor(private http: HttpClient) {}

    // ########################################

    public getItems(): Observable<TestsRestInterface[]> {
        return this.http.get<{ data: TestsRestInterface[] }>(TestsService.TESTS).pipe(map((resp) => resp.data));
    }

    // ########################################
}
