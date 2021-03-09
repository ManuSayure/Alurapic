import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';

@NgModule({
    
    declarations: [ CardComponent ], /** Declara o card component */
    exports: [ CardComponent ], /** Fornece o card component */
    imports:[ CommonModule ]

})
export class CardModule{}