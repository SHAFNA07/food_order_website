import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { AllfooditemsComponent } from './allfooditems/allfooditems.component';
import { EachfooditemComponent } from './eachfooditem/eachfooditem.component';
import { EditfoodComponent } from './editfood/editfood.component';
import { DeletefoodComponent } from './deletefood/deletefood.component';
import { AddnewfoodComponent } from './addnewfood/addnewfood.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FoodComponent,
    AllfooditemsComponent,
    EachfooditemComponent,
    EditfoodComponent,
    DeletefoodComponent,
    AddnewfoodComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FoodModule { }
