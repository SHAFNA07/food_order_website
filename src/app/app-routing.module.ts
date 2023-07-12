import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [{ path: 'food', loadChildren: () => import('./food/food.module').then(m => m.FoodModule) },
{path:"blog" ,component:BlogComponent},
{path:'',redirectTo:'food',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
