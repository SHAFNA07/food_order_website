import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-allfooditems',
  templateUrl: './allfooditems.component.html',
  styleUrls: ['./allfooditems.component.css']
})
export class AllfooditemsComponent implements OnInit {
  fooddata:any
  filterCategory:any
  searchString:any=''


  constructor(private fs:FoodService){ }
    

 ngOnInit() : void {
  this.fs.Allfooditems().subscribe((data:any)=>{
   // console.log(data);
this.fooddata=data
    
  })

  //access data from behavior subject
  this.fs.search.subscribe((data:any)=>{
    this.searchString=data
  })
 }
  filter(category:any)
  {
     this.filterCategory=this.fooddata.filter((i:any)=>i.categoryId==category || category=="")
     
 }
  
 }

