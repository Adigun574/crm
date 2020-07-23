import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = ''
  password:string = ''
  emptyCredentials:boolean
  invalidCredentials:boolean

  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username != '' && this.password != ''){
      this.userService.login(this.username,this.password).subscribe(data=>{
        // console.log(data)
        localStorage.setItem("tunnexcrmuser",JSON.stringify(data))
        this.router.navigateByUrl('main')
        this.invalidCredentials = false
      },
        err=>{
          this.invalidCredentials = true
        })
    }
    else{
      this.emptyCredentials=true
    }

    // this.router.navigateByUrl('main')
  }

}
