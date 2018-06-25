import { Injectable } from '@angular/core';

import { User } from '../models/User';
import { Observable } from 'rxjs';
import {of} from 'rxjs';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
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
   }

   getData() {
     this.data = new Observable(observer => {
       setTimeout(()=> {
         observer.next(1);
       },1000);

       setTimeout(()=> {
        observer.next(2);
      },2000);

      setTimeout(()=> {
        observer.next(3);
      },2000);
     })

     return this.data;
   }

   getUsers(): Observable<User[]>{
     return of (this.users);
   }

   addUser(user: User){
     this.users.unshift(user);
   }
}
