import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  search=new BehaviorSubject('')

  constructor(private http:HttpClient) { }

  //api to view all foods

  Allfooditems()
  {
   return this.http.get('http://localhost:3000/foods')
  }
  //view each food

  viewEachfood(fid:any)
  {
    return this.http.get('http://localhost:3000/foods/'+fid)
  }

  deletefood(fid:any)
  {
    return this.http.delete('http://localhost:3000/foods/'+fid)
  }

  //add food

  addnewfood(fdata:any)
  {
    return this.http.post('http://localhost:3000/foods/',fdata)
  }

  //edit food

  editfood(fid:any,fdata:any)
  {
   return this.http.put('http://localhost:3000/foods/'+fid,fdata)
  }
}




