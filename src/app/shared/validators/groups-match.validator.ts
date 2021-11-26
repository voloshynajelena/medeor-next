import { FormGroup, ValidatorFn } from '@angular/forms';

export function groupMatch(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl): { groupMatch: boolean } | null => {
        const control = (abstractControl as FormGroup).controls[controlName];
        const matchingControl = (abstractControl as FormGroup).controls[matchingControlName];

        if (control.value === matchingControl.value) {
            matchingControl.setErrors(null);

            return null;
        } else {
            const opt = { groupMatch: true };

            matchingControl.setErrors(opt);

            return opt;
        }
    };
}
