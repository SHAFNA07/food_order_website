import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food.component';
import { AllfooditemsComponent } from './allfooditems/allfooditems.component';
import { AddnewfoodComponent } from './addnewfood/addnewfood.component';
import { EditfoodComponent } from './editfood/editfood.component';
import { EachfooditemComponent } from './eachfooditem/eachfooditem.component';
import { DeletefoodComponent } from './deletefood/deletefood.component';

const routes: Routes = [
  { path: '', component: AllfooditemsComponent },
{path: 'add-food', component: AddnewfoodComponent },
{path: 'edit-food/:id', component: EditfoodComponent},
{path: 'each-food/:id', component: EachfooditemComponent},
{path: 'delete-food/:id', component: DeletefoodComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
