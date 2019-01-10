import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
}

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038531_249px.jpg?1370033492", name: "Jalisco"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038539_249px.jpg?1370033492", name: "Oaxaca"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038537_249px.jpg?1370033492", name: "Nuevo León"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038524_249px.jpg?1370033492", name: "Ciudad de México"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038520_249px.jpg?1370033492", name: "Chihuahua"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038551_249px.jpg?1370033492", name: "Yucatán"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038549_249px.jpg?1370033492", name: "Guanajuato"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038519_249px.jpg?1370033492", name: "Chiapas"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038553_249px.jpg?1370033492", name: "Tlaxcala"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038525_249px.jpg?1370033492", name: "Durango"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038532_249px.jpg?1370033492", name: "México"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038515_249px.jpg?1370033492", name: "Baja California"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038528_249px.jpg?1370033492", name: "Guerrero"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038540_249px.jpg?1370033492", name: "Puebla"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038550_249px.jpg?1370033492", name: "Veracruz"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038533_249px.jpg?1370033492", name: "Michoacán"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038513_249px.jpg?1370033492", name: "Aguascalientes"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038545_249px.jpg?1370033492", name: "Sonora"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038547_249px.jpg?1370033492", name: "Tamaulipas"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038544_249px.jpg?1370033492", name: "Sinaloa"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038552_249px.jpg?1370033492", name: "Zacatecas"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038546_249px.jpg?1370033492", name: "Tabasco"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038541_249px.jpg?1370033492", name: "Queretaro"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038521_249px.jpg?1370033492", name: "Coahuila"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038516_249px.jpg?1370033492", name: "Baja California Sur"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038529_249px.jpg?1370033492", name: "Hidalgo"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038535_249px.jpg?1370033492", name: "Nayarit"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038542_249px.jpg?1370033492", name: "Quintana Roo"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038522_249px.jpg?1370033492", name: "Colima"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038543_249px.jpg?1370033492", name: "San Luis Potosí"},
      //{flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038538_249px.jpg?1370033492", name: "Nuevo México"}, 
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038534_249px.jpg?1370033492", name: "Morelos"},
      //{flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038548_249px.jpg?1370033492", name: "Texas"},
      {flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038518_249px.jpg?1370033492", name: "Campeche"},
      //{flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038514_249px.jpg?1370033492", name: "Alta California"},
      //{flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038527_249px.jpg?1370033492", name: "Guatemala"},
      //{flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038523_249px.jpg?1370033492", name: "Costa Rica"},
      //{flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038517_249px.jpg?1370033492", name: "Belice"},
      //{flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038536_249px.jpg?1370033492", name: "Nicaragua"},
      //{flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038526_249px.jpg?1370033492", name: "El Salvador"},
      //{flag: "https://st-listas.20minutos.es/images/2013-05/362056/4038530_249px.jpg?1370033492", name: "Honduras"},
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
