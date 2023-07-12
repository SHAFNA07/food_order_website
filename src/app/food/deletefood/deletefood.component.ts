import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-deletefood',
  templateUrl: './deletefood.component.html',
  styleUrls: ['./deletefood.component.css']
})
export class DeletefoodComponent implements OnInit {

  fid:any
  constructor(private ar:ActivatedRoute,private fs:FoodService,private router:Router)
  {}
    ngOnInit(): void {
      
      this.ar.params.subscribe((data:any)=>{
        this.fid=data["id"]
      })

      this.fs.deletefood(this.fid).subscribe((item:any)=>{
        alert("product deleted")
        this.router.navigateByUrl("food")
      })
    }

}
