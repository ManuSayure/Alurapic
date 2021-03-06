import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';


import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({

    declarations:[
        PhotoListComponent,
        LoadButtonComponent,
        FilterByDescription,
        PhotosComponent,
        SearchComponent
    
    ],
    imports:[
      
        CommonModule,
        PhotoModule,
        CardModule,
       
    ]
})
export class PhotoListModule{

}