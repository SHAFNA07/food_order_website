import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css']
})
export class EditfoodComponent implements OnInit {
  fid:any
  fdata:any
  constructor(private ar:ActivatedRoute,private fs:FoodService,private router:Router)
  {

  }
  ngOnInit(): void {

    this.ar.params.subscribe((data:any)=>{
     this.fid= data["id"]
    })
    this.fs.viewEachfood(this.fid).subscribe((item:any)=>{
      this.fdata=item
      console.log(this.fdata);
      
    })
  }

  updatefood(form:any){
    this.fs.editfood(this.fid,this.fdata).subscribe((item:any)=>{
      alert("food details updated")
      this.router.navigateByUrl("food")
    })
  }

}
