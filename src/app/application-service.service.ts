import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable,Subject,BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn:'root'
})
export class ApplicationServiceService {

  constructor(private http : HttpClient) { }


  buttonClicked() : void{
    alert('button is clicked');
  }


  product () : Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    


    
  }
  // userName: any = new Subject<any>();

  userName = new BehaviorSubject('technological eart')
}
