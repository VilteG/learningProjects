import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable()
export class LogService {
logs:Log[];

private logSource = new BehaviorSubject<Log>({id:null, text: null, date:null});
selectedLog = this.logSource.asObservable(); 

private stateSource = new BehaviorSubject<boolean>(true);
stateClear = this.stateSource.asObservable();

  constructor() {
    //this.logs = [
     //id:'3', text:'Generated Service', date: new Date ('10/12/12 14:12:12')},
    //];
    this.logs = [];
   }

   getLogs(): Observable<Log[]>{
     return of(this.logs);
   }

   setFormLog(log: Log){
     this.logSource.next(log);
   }

   addLog(log: Log){
     this.logs.unshift(log);
   }

   updateLog(log: Log) {
     this.logs.forEach((cur, index)=>{
        if(log.id === cur.id){
          this.logs.splice(index,1)
        }
     });
     this.logs.unshift(log);
   }

   deleteLog(log: Log){
    this.logs.forEach((cur, index)=>{
      if(log.id === cur.id){
        this.logs.splice(index,1)
      }
   });

   }

   clearState(){
     this.stateSource.next(true);
   }
}
