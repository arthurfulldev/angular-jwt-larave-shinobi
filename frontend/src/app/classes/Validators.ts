import { AbstractControl } from '@angular/forms';
import { STATES } from '../mockups/State'

export class Validators {
    
    static validaEstado ( control: AbstractControl ): {[ key: string ]: any}  {
        let res = null;
        for ( let state of STATES ) {
            if( control.value == state.name ){
                res = true;
            }
        }
    
        if ( control.value == "" || control.pristine )
        {
            return null;
        }
    
        return ( ! res ) ? { 
            'message': `El estado que ingreso no existe`, 
            'value' : res,
            'error': undefined 
        } 
        : null;
    }

    static required ( control: AbstractControl ):  {[key: string]: any} {
        return ( control.value == "" || control.value == null ) ? { 
            'message': 'Este campo es obligatorio.', 
            'value' : true,
            'error': 403
        } 
        : null;
    }
}