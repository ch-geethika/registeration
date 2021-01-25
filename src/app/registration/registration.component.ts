
import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';
import { ActivatedRoute,Router} from '@angular/router';
import {UserServiceService} from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
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
  constructor(private userservice:UserServiceService,private route: Router) { }

  saveUser(user:IUser){​​​​    
    this.userservice.addUser(this.user).subscribe(()=>
    {​​​​      
      alert("Record Added");     
     this.route.navigate(['/']);   
   }​​​​,error=>{
    alert(error.Message);
   }); 
 }​​​​

  ngOnInit(): void {
  }

}
