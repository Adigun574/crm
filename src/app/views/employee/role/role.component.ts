import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})


export class RoleComponent implements OnInit {

  roles = []
  roleName:string
  loadingRoles:boolean = false


  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<Role>(this.roles);  


  // roles:Role[] = []

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private roleService:RoleService,
    private modalService:NgbModal
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllRoles()
  }

  open(content){
    this.modalService.open(content)
  }

  

  saveRole(){
    this.roleObj.Name = this.roleName
    console.log(this.roleObj)
  }

  getAllRoles(){
    this.loadingRoles = true
    this.roleService.getAllRoles().subscribe(data=>{
      this.roles = <Role[]>data
      this.dataSource = new MatTableDataSource<Role>(this.roles);
      this.loadingRoles = false
    },
      err=>{
        this.loadingRoles = false
      })
  }

  roleObj:Role = {
    Name: "",
    Code: "",
    Privileges: [
      {
        Name: "customer",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "product",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "role",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "pos",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "employees",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "saleshistory",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "users",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "leads",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "productreports",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "customersreport",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "inventory",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "training programmes",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "skillmonitoring",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      },
      {
        Name: "messages",
        Code: "",
        Read: true,
        Write: true,
        RoleID: 0,
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-29T04:09:33.948Z",
        DateModified: "2020-04-29T04:09:33.948Z"
      }
    ],
    ID: 0,
    UserCreated: 0,
    UserModified: 0,
    DateCreated: "2020-04-29T04:09:33.948Z",
    DateModified: "2020-04-29T04:09:33.948Z"
  }

}
