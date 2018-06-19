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
  currentClasses = {};

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
        image:'http://lorempixel.com/600/600/people/3',
        isActive:true
    },
    
    {
      firstName:'Jhon',
      lastName: 'Doe',
      age: 30,
      adress: {
          street: 'Gedimino',
          city: 'Kaunas'
      },
      image:'http://lorempixel.com/600/600/people/2'
  },
  
  {
    firstName:'Steve',
    lastName: 'Malone',
    age: 30,
    adress: {
        street: 'Putvinskio',
        city: 'Kaunas'
    },
    image:'http://lorempixel.com/600/600/people/1'
}     

    ];   

    this.showExtended=true; // neberodys adreso ir kitos info

    this.addUser(
      {
        firstName:'Jhon',
        lastName: 'Smith'
            }     
    );

    this.setCurrentClasses();

    }

    addUser(user:User){
      this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-sucess':this.enabeledAdd,
      'big-text':this.showExtended
    }
  }

}
