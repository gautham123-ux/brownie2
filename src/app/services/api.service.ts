
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

    // Search box element

  constructor(private api:HttpClient) { }

  getUsers(){
    return this.api.get('https://dummyjson.com/users')
  }

  viewUser(userId:any){
    return this.api.get('https://dummyjson.com/users/'+userId)
  }
}