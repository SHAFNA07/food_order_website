import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewfood',
  templateUrl: './addnewfood.component.html',
  styleUrls: ['./addnewfood.component.css']
})
export class AddnewfoodComponent implements OnInit{

  constructor(private fb:FormBuilder,private fs:FoodService,private router:Router){}

  addfoodform=this.fb.group({

         id:[''],
        productName:[''] ,
        categoryId: [''],
        calories: [''],
        price: [''],
        is_available:[''],
        productImg: [''],
        rating: [''],
        type:[''],
        persons: ['']
  })
  
ngOnInit(): void {
  
}
addfood()
{
  let fdata= {
    id:this.addfoodform.value.id,
    productName:this.addfoodform.value.productName,
    categoryId: this.addfoodform.value.categoryId,
    calories: this.addfoodform.value.calories,
    price: this.addfoodform.value.price,
    is_available:this.addfoodform.value.is_available,
    productImg: this.addfoodform.value.productImg,
    rating: this.addfoodform.value.rating,
    type:this.addfoodform.value.type,
    persons:this.addfoodform.value.persons
  }

  this.fs.addnewfood(fdata).subscribe((item:any)=>{
    alert('new food added')
    this.router.navigateByUrl('food')

  })
}
}
