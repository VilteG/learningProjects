import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';


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
  //currentClasses = {};
  //currentStyles={};

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName:'Victoria',
        lastName: 'Baumhart',
        email:'victoria@gmail.com',
        //image:'http://lorempixel.com/600/600/people/3',
        isActive:true,
        //balance:100,
        registered: new Date('01/02/2018 08:30:00'),
        hidden:true
    },
    
    {
      firstName:'Jhon',
      lastName: 'Doe',
      email:'jhon@yahoo.com',
      //image:'http://lorempixel.com/600/600/people/2',
      //balance:200,
      registered: new Date('02/15/2018 06:34:00'),
      hidden:true
  },
  
  {
    firstName:'Steve',
    lastName: 'Malone',
    email:'steve@gmail.com',
    //image:'http://lorempixel.com/600/600/people/1'
    hidden:true
}     

    ];   

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
