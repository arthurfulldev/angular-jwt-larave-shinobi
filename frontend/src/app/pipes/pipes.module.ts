import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenrePipe } from './genre.pipe'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
      GenrePipe
    ],
    declarations: [
        GenrePipe
    ]
})
export class PipesModule { }
