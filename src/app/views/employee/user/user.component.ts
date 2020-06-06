import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { User } from '../../../models/User';
import { date } from '../../../classes/date';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  users = []
  addUserForm:FormGroup
  genders=[
    {name:'male'},
    {name:'female'},
    {name:'not specified'}
  ]
  submitted:boolean = false
  savingUser:boolean = false
  selectedUser:any
  updatingUser:boolean = false
  loadingUsers:boolean = false
  currentUser:User


  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<Role>(this.users);  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private modalService:NgbModal,
    private userService:UserService,
    private fb:FormBuilder
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem("tunnexcrmuser"))
    this.addUserForm = this.fb.group({
      Username:[,Validators.required],
      Name: [,Validators.required],
      Post: [],
      Phone: [],
      Password: [],
      Gender: ["male"],
      Image: [],
      Email: [],
      ID: 0,
      UserCreated: this.currentUser.id,
      UserModified: 0,
      // DateCreated: [date()],
      // DateModified: [date()]
    })
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllUsers()
  }

  open(content){
    this.modalService.open(content)
  }

  openEditModal(editModal,user){
    this.selectedUser = user
    this.open(editModal)
  }

  getAllUsers(){
    this.loadingUsers = true
    this.userService.getUsers().subscribe(data=>{
      this.users = <any[]>data
      this.dataSource = new MatTableDataSource<Role>(this.users);
      this.loadingUsers = false
    },
      err=>{
        this.loadingUsers = false
      })
  }

  saveUser(){
    this.submitted = true
    if(this.addUserForm.invalid){
      return
    }
    else{
      this.savingUser = true
      this.userService.saveUser(this.addUserForm.value).subscribe(data=>{
        this.savingUser = false
        this.getAllUsers()
        this.modalService.dismissAll()
      },
        err=>{
          this.savingUser = false
          this.modalService.dismissAll()
        })
    }

  }

  updateUser(){
    this.updatingUser = true
    this.userService.updateUser(this.selectedUser).subscribe(data=>{
      this.updatingUser = false
      this.modalService.dismissAll()
      this.getAllUsers()
    },
      err=>{
        this.updatingUser = false
        this.modalService.dismissAll()
      })
  }

  deleteUser(user){
    this.userService.deleteUser(user.id).subscribe(data=>{
      console.log(data)
      this.getAllUsers()
    },
    err=>{
      console.log(err)
    })
  }

}
