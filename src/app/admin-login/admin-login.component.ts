

import { Component, OnInit } from '@angular/core';
import { IAdmin } from '../iadmin';
import { ActivatedRoute,Router} from '@angular/router';
import {UserServiceService} from '../services/user.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']

})
export class AdminLoginComponent implements OnInit {

admin:IAdmin={
  AdminId:null,
  Email:null,
  Password:null,
}
  constructor(private userservice:UserServiceService,private route: Router) { }
  AdminLogin(admin:IAdmin)

  {
    this.userservice.getAdminLogin(admin).subscribe((data)=>{
      if(admin)
      {
       alert("Logined Successfully");
       this.route.navigate(['/admindomain/',data.AdminId]);

      }
    },error=>{
      alert(error.error.Message);
  

    });
   
  }
  ngOnInit(): void {
  }

}
