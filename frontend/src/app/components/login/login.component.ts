import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { State } from '../../interfaces/state';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { existState } from '../../mockups/existState'; // Validacion perssonalizada de Estado

import { STATES } from '../../mockups/existState';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    frmLogin: FormGroup;

    private states = STATES;
    
    filteredStates: Observable<State[]>;

    public message = null;
    private estado: string = '';

    constructor( 
        private fb: FormBuilder,
    ) {
        this.frmLogin = this.fb.group(
            { 
                stateInput: [ null, [ this.required, existState] ],
                email:      [ null, [ this.required ] ],
                password:   [ null, [ this.required ] ]
            }
        )

        this.filteredStates = this.frmLogin.controls['stateInput'].valueChanges
            .pipe(
                startWith(''),
                map( state => state 
                    ? this._filterStates(state) 
                    : this.states.slice())
        );
    }

    private _filterStates(value: string): State[] {
        const filterValue = value.toLowerCase();
  
        return this.states.filter(
            state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }

    public ingresar() {
        if( this.frmLogin.invalid ) {
            return this.message = "Debes completar correctamente los campos"
        }
        this.message = null;        
        console.log( this.frmLogin.value );
    }

    required ( control: AbstractControl ):  {[key: string]: any} {
        return ( control.value == "" || control.value == null ) ? { 
            'message': 'Este campo es obligatorio.', 
            'value' : true,
            'error': 403
        } 
        : null;
    }
}