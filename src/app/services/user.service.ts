import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { IUser } from '../iuser';
import { IAdmin } from '../iadmin';
// import { IReport } from '../models/IReport';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
url='http://localhost:54789/api/default';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};
  constructor(private http:HttpClient) { }
 getUserLogin(user:IUser):Observable<IUser>
 {
   return this.http.post<IUser>(this.url+"/PostLogin",user,this.httpOptions);
 }
 GetUser(id:number):Observable<IUser>
 {
   return this.http.get<IUser>(this.url+"GetUser/"+id);
 }
 getAdminLogin(admin:IAdmin):Observable<IAdmin>
 {
   return this.http.post<IAdmin>(this.url+"PostAdminLogin/",admin,this.httpOptions);
 }
 addUser(user:IUser):Observable<IUser>{​​​​  
  return this.http.post<IUser>(this.url + "/PostUser",user,this.httpOptions);
}​​​​
PutPassword(user:IUser):Observable<IUser>{
  return this.http.put<IUser>(this.url +"/PutUser",user,this.httpOptions);
}
ForgetPassowrd(user:IUser):Observable<IUser>
{
  return this.http.get<IUser>(this.url+"/GetPassword?id="+user.Id +"&Email=" +user.Email);
}
ForgetPassowrd1(admin:IAdmin):Observable<IAdmin>
{
  return this.http.get<IAdmin>(this.url+"/GetPasswordForAdmin?id="+admin.AdminId +"&Email=" +admin.Email);
}
}