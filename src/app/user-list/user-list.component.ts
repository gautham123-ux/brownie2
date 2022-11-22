import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiServiceService } from '../services/api.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:any 
  name:any="UserList"
  searchTerm=""
  apiservices: any;

  constructor(private apiservice:ApiServiceService, private route:RouterModule) { }

  ngOnInit(): void{
    this.apiservice.getUsers()    
    .subscribe((result:any)=>{
      this.userList =result.users
    console.log(result.users);
    })

  }

}
