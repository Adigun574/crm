import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser:User
  privilege

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // this.currentUser = JSON.parse(localStorage.getItem("tunnexcrmuser"))
    // // return true;
    // this.privilege = this.currentUser.role.privileges.find(x => {
    //   console.log(x.name)
    //   console.log(next.data.title)
    //   return x.name == next.data.title;
    // });
    
    // if (this.currentUser.role.name == 'Super Admin') {
    //   return true;
    // } else if (this.privilege.read == true) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true

  }
  
}
