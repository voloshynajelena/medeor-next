import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { TestsRestInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';

export const TESTS_EDIT = new InjectionToken('TESTS_EDIT', {
    factory: () => new Subject<TestsRestInterface | null>()
});

export const TESTS_GROUP_EDIT = new InjectionToken('TESTS_GROUP_EDIT', {
    factory: () => new Subject<TestsRestInterface | null>()
});
