import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // properties
  user: User = {
    firstName:'',
    lastName:'',
    email:''
  }
  users: User[]; // brackets: its gonna be array of users
  showExtended: boolean = true;
  enabeledAdd:boolean = false;
  showUserForm:boolean = false;
  @ViewChild('userForm') form:any;
  //currentClasses = {};
  //currentStyles={};

  constructor(private dataService : DataService) { }

  ngOnInit() {
    
    this.users = this.dataService.getUsers();

    this.showExtended=true; // neberodys adreso ir kitos info

   
    // this.addUser(
    //   {
    //     firstName:'Jhon',
    //     lastName: 'Smith'
    //         }     
    // );

   // this.setCurrentClasses();
    //this.setCurrentStyles();

    }

    onSubmit({value, valid}:{value:User, valid:boolean}) {
      if(!valid){
        console.log('form is not valid');
       }else{
        value.isActive = true;
        value.registered = new Date();
        value.hidden = true;
  
        this.dataService.addUser(value);
  
        this.form.reset();
       }
  }


  //   addUser(){
  //     this.user.isActive=true;
  //     this.user.registered = new Date();
  //     this.users.unshift(this.user);

  //     //clearing form after submitting
  //     this.user = {
  //       firstName:'',
  //   lastName:'',
  //   email:''
  // }

  
  // toggleHide(user:User){
  //   user.hidden = !user.hidden;
  // }
  

  // setCurrentClasses(){
  //   this.currentClasses = {
  //     'btn-sucess':this.enabeledAdd,
  //     'big-text':this.showExtended
  //   }
  // }

  // setCurrentStyles(){
  //   this.currentStyles = {
  //     'padding-top':this.showExtended ? '0':'40px'
  //   }

 // }

}
