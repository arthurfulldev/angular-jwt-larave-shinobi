import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from  '../../classes/Validators';

import { STATES } from '../../mockups/State';
import { Observable } from 'rxjs';
import { State } from 'src/app/interfaces/state';
import { startWith, map } from 'rxjs/operators';

const USER = {
  name: "Arturo",
  paternal_lastname: "Hernández",
  maternal_lastname: "Medero",
  genre: "H",
  age: 29
}

const ADDRESS = {
  street:           "Jose María Morelos y Pavón" ,
  external_number:  39, 
  internal_number:  null,
  city:             "San José Buenavista",
  thownship:        "Iztapalapa",
  state:            "Ciudad de México",   
  country:          "México", 
  zip_code:         "09706"
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  public frmPersonalData: FormGroup;
  public frmAddressData: FormGroup;
  public frmCredentialsData: FormGroup;

  public user = USER;
  public address = ADDRESS;

  public isEditable = false;

  public filteredStates: Observable<State[]>;

  constructor(
    private fb: FormBuilder
  ) { 
    
    this.frmPersonalData = fb.group(
      {
        name:              [ null, [ 
                                      Validators.required, 
                                      Validators.minLength(3),
                                      Validators.maxLength(10),
                                      Validators.noSpace,
                                    ]
                           ],
        paternal_lastname: [ null, [
                                      Validators.required,
                                      Validators.between(3,10)
                                   ] 
                           ],
        maternal_lastname: [ null, Validators.required ],
        genre:             [ 'H',  Validators.required ],
        age:               [ null, Validators.required ]
      }
    );

    this.frmAddressData = fb.group(
      {
        street:          [ null,  Validators.required ],
        external_number: [ 39,  Validators.required ],
        internal_number: [ null ],
        city:            [ null,  Validators.required ],
        thownship:       [ null,  Validators.required ],
        state:           [ null,  [ 
                                    Validators.required, 
                                    Validators.validaEstado
                                  ] 
                         ],
        country:         [ null, Validators.required ],
        zip_code:        [ null , Validators.required ]
      }
    );

    this.frmCredentialsData = fb.group(
      {
        email:            [ null, Validators.required ],
        password:         [ null, Validators.required ],
        password_confirm: [ null, Validators.required ]
      }
    )

    this.filteredStates = this.frmAddressData.controls['state'].valueChanges
        .pipe(
            startWith(''),
            map( state => state 
                ? this._filterStates(state) 
                : STATES.slice())
    );
  }

  private _filterStates(value: string): State[] {
      const filterValue = value.toLowerCase();
    
      return STATES.filter(
          state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    //this.frmPersonalData.setValue( USER );
    this.frmAddressData.setValue( ADDRESS );
    //this.frmCredentialsData.setValue( CREDENTIALS );
  }
}
