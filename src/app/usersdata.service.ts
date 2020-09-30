import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor() { }
  getdata (){
    return {
      name: "Eric",
      age : 24,
      gender: "male"
    }
  }
}
