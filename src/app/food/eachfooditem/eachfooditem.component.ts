import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-eachfooditem',
  templateUrl: './eachfooditem.component.html',
  styleUrls: ['./eachfooditem.component.css']
})
export class EachfooditemComponent implements OnInit {


  fid:any
  fdata:any
  constructor( private ar:ActivatedRoute,private fs:FoodService)
  {}
ngOnInit(): void {

  this.ar.params.subscribe((data:any)=>{
  
 this.fid=(data["id"]);

  })

   this.fs.viewEachfood(this.fid).subscribe((item:any)=>{
// console.log(item);
 this.fdata=item
  })
}
}
