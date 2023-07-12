import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/food/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm:any

  constructor(private fs:FoodService)  {}

  ngOnInit(): void {
    
  }

  searchData(event:any){
 this.searchTerm=event.target.value
 //send the data to behavior subject

 this.fs.search.next(this.searchTerm)

  }


}
