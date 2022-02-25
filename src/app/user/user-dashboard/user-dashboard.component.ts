import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(private userApi:UserApiService,private route:Router) { }

  userData:any
  ngOnInit(): void {
    this.userData=this.userApi.user.getValue()
  }
  // delete profile
  deleteProfile(){
    let email = this.userData.email
    this.userApi.deleteAccount(email).subscribe({
      next:(res)=>{
        if(res.message=='User deleted successfully!'){
          this.userApi.logoutUser()
          this.route.navigateByUrl('login')
        }
      },
      error:(err)=>{console.log(err)}
    })
  }
  // editprofile
  editAccount(){
    let updatedUser;
    this.userApi.editAccount(updatedUser).subscribe({
      next:(res)=>{
        if(res.message=='User deleted successfully!'){
          
        }
      },
      error:(err)=>console.log(err)
    })
  }

}
