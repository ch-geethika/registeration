import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user.service';
import { IUser } from '../iuser';
import { ActivatedRoute,Router} from '@angular/router';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
UserId:number;
 //user:IUser;
 user:IUser=
 {
  Id:null,
   Email:null,
   Password:null,
   Name:null,DateOfBirth:null,
   MobileNumber:null,
   City:null,
   State:null,
   Qualification:null,
   YearOfPassing:null};
  
   constructor(private userservice:UserServiceService,private route: Router,private router:ActivatedRoute) { }

UserLogin(user:IUser):void
{console.log(user);
  this.userservice.getUserLogin(user).subscribe((data)=>{
    
    this.user=data;
    ///console.log(data);
    //this.UserId=data.UserId;
    if(this.user)
    {
     alert("Logined Successfully");
     this.route.navigate(['/account',data.Id]);

    }
  },error=>{
    alert(error.error.Message);
  });
}
  ngOnInit(): void {
   
  }

}

