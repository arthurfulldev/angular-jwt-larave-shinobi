import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})

export class GenrePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value == "H" ? "Hombre": "Mujer";
  }
}
