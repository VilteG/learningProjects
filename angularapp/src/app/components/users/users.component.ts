import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // properties
  users: User[]; // brackets: its gonna be array of users
  showExtended: boolean = true;
  enabeledAdd:boolean = true;
  //currentClasses = {};
  //currentStyles={};

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName:'Victoria',
        lastName: 'Baumhart',
        age: 22,
        adress: {
            street: 'Vilniaus',
            city: 'Kaunas'
        },
        //image:'http://lorempixel.com/600/600/people/3',
        isActive:true,
        //balance:100,
        registered: new Date('01/02/2018 08:30:00'),
        hidden:true
    },
    
    {
      firstName:'Jhon',
      lastName: 'Doe',
      age: 30,
      adress: {
          street: 'Gedimino',
          city: 'Kaunas'
      },
      //image:'http://lorempixel.com/600/600/people/2',
      //balance:200,
      registered: new Date('02/15/2018 06:34:00'),
      hidden:true
  },
  
  {
    firstName:'Steve',
    lastName: 'Malone',
    age: 30,
    adress: {
        street: 'Putvinskio',
        city: 'Kaunas'
    },
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

    addUser(user:User){
      this.users.push(user);
  }

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
