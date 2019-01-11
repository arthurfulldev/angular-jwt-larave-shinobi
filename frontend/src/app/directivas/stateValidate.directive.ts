import { Directive, OnInit, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { existState } from '../mockups/existState';

@Directive({
    selector: '[exits-state]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef( () => StateValidator ),
            multi: true
        }
    ]
})

export class StateValidator implements Validator{
    validate ( control: AbstractControl ): {[ key: string ]: any}  {
        console.log( control );
        return existState(control);
    }
}