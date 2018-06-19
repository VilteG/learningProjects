import { Component } from '@angular/core';
import { User } from '../../models/User';

//decorator
@Component ({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css']
    //template: '<h2> Jhon Doe </h2>'
    //styles: [`
    //h2 {
     //   color:blue;
   // }
  //  `]
})

// class Pascal case, export makes it available outside class
export class UserComponent{
    // properties
    user: User;   

    //Methods
    constructor(){
      // this.sayHello(); // calling a method or a property with this.
      this.user = {
          firstName:'Jhon',
          lastName: 'Doe',
          age: 30,
          adress: {
              street: 'Gedimino',
              city: 'Kaunas'
          }
      }     
    }
}




