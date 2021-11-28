import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { TestsRestInterface } from 'src/app/tests-constructor/tests/tests-rest.interface';

export const TEST_EDIT = new InjectionToken('TEST_EDIT', {
    factory: () => new Subject<TestsRestInterface | null>()
});

export const TESTS_GROUP_EDIT = new InjectionToken('TESTS_GROUP_EDIT', {
    factory: () => new Subject<TestsRestInterface | null>()
});

export const TEST_CODE = new InjectionToken('TEST_TYPE_ID', {
    factory: () => new Subject<string | null>()
});

export const TESTS_GROUP_IDS = new InjectionToken('TESTS_GROUP_TYPE_IDS', {
    factory: () => new Subject<string[]>()
});
