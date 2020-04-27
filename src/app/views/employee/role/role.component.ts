import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})


export class RoleComponent implements OnInit {

  roles = []


  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<Role>(this.roles);  

  // roles:Role[] = []

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private roleService:RoleService
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllRoles()
  }

  getAllRoles(){
    // this.roleService.getAllRoles().subscribe(data=>{
    //   this.roles = <Role[]>data
    // },
    //   err=>{

    //   })
    this.roles = [
      {
        "name": "string",
        "code": "string",
        "privileges": [
          {
            "name": "string",
            "code": "string",
            "read": true,
            "write": true,
            "roleID": 1,
            "id": 1,
            "userCreated": 0,
            "userModified": 0,
            "dateCreated": "2020-04-25T08:41:47.472",
            "dateModified": "2020-04-25T08:41:47.473"
          }
        ],
        "id": 1,
        "userCreated": 0,
        "userModified": 0,
        "dateCreated": "2020-04-25T08:52:15.340588",
        "dateModified": "0001-01-01T00:00:00"
      },
      {
        "name": "string",
        "code": "string",
        "privileges": [
          {
            "name": "string",
            "code": "string",
            "read": true,
            "write": true,
            "roleID": 2,
            "id": 2,
            "userCreated": 0,
            "userModified": 0,
            "dateCreated": "2020-04-27T22:42:38.971",
            "dateModified": "2020-04-27T22:42:38.971"
          }
        ],
        "id": 2,
        "userCreated": 0,
        "userModified": 0,
        "dateCreated": "2020-04-27T09:43:47.9407145",
        "dateModified": "0001-01-01T00:00:00"
      }
    ]
    this.dataSource = new MatTableDataSource<Role>(this.roles);
  }

}
