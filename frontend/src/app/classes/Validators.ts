import { AbstractControl, ValidatorFn } from '@angular/forms';
import { STATES } from '../mockups/State'

export class Validators {
    
    static validaEstado ( control: AbstractControl ): {[ key: string ]: any}  
    {
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

    static required ( control: AbstractControl ):  {[key: string]: any} 
    {
        return ( control.value == "" || control.value == null ) ? { 
            'message': 'Este campo es obligatorio.', 
            'value' : true,
            'error': 403
        } 
        : null;
    }

    static noSpace ( control: AbstractControl ): {[key: string]: any }
    {
        return ( !( control.value == "" || control.value == null ) && control.value.indexOf(' ') > -1) 
        ? { 
            'message': 'este campo no acepta espacios.', 
            'value' : true,
            'error': 403
        } 
        : null;
    }

    static minLength ( size: number ): ValidatorFn
    {
        return ( control: AbstractControl ): { [key: string]: any } => {
            if ( 
                    ( control.value == null ) ? 0 : control.value.length < size
                    && !( control.value == "" 
                    || control.value == null ) 
                ) {
                return {
                    'message': 'El campo debe contener al menos: ' + (size) + ' caracteres.',
                    'value': true,
                    'error': 403
                }
            }
            else {
                return null;
            }
        }
    }

    static maxLength ( size: number ): ValidatorFn
    {
        return ( control: AbstractControl ): { [key: string]: any } => {
            if ( 
                    ( control.value == null ) ? 0 : control.value.length > size
                    && !( control.value == "" 
                    || control.value == null ) 
                ) {
                return {
                    'message': 'El campo debe contener máximo: ' + (size) + ' caracteres.',
                    'value': true,
                    'error': 403
                }
            }
            else {
                return null;
            }
        }
    }

    static between ( min: number, max: number ): ValidatorFn
    {
        return ( control: AbstractControl ): { [key: string]: any } => {
            if ( 
                    ( control.value == null )
                    ? 0 
                    : ( control.value.length < min
                      || control.value.length > max )
                      && !( control.value == "" || control.value == null ) 
                ) {
                return {
                    'message': 'El campo debe contener al menos: ' + min + ' y maximo: ' + max + ' caracteres.',
                    'value': true,
                    'error': 403
                }
            }
            else {
                return null;
            }
        }
    }
    
}