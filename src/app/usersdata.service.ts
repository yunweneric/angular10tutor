import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor() { }
  data =
    [
      {
        name: "Eric", age: 25, email: "yunweneric@gmal.com"
      },
      {
        name: "noel", age: 25, email: "yunweneric@gmal.com"
      },
      {
        name: "joy", age: 25, email: "yunweneric@gmal.com"
      },
      {
        name: "rita", age: 26, email: "yunweneric@gmal.com"
      },
      {
        name: "delight", age: 25, email: "yunweneric@gmal.com"
      },
      {
        name: "loveline", age: 27, email: "yunweneric@gmal.com"
      },
    ]

}

