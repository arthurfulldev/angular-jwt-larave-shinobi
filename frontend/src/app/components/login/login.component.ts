import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { Validators } from '../../classes/Validators'

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    frmLogin: FormGroup;

    public message = null;

    constructor( 
        private fb: FormBuilder,
    ) {
        this.frmLogin = this.fb.group(
            { 
                email:      [ "medero2324@gmail.com", [ Validators.required ] ],
                password:   [ "123456", [ Validators.required ] ]
            }
        )

        this.frmLogin.statusChanges.subscribe(
            ( status ) => {
                this.message = ( status == "VALID" ) ? null : this.message;
            }
        );

    }

    public ingresar() {
        if( this.frmLogin.invalid ) {
            return this.message = "Debes completar correctamente los campos"
        }
        this.message = null;        
        console.log( this.frmLogin.value );
    }

}