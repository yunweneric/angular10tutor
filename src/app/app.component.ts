// import { NAMED_ENTITIES } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutor';
  name = "Eric";
  // getname = () => "Greetings"
  // siteurl = window.location.href;
  // obj = {
  //   name: "kelly",
  //   age: 20

  // }

 
  // arr = ["peter", "john", "emma"]

  getname = (name2) => {
    // let name = "Eric";
    console.log(name2);


  }
  // dis = false;
  // show = "blue";

  // mylist = [
  //   "Eric", "Noel", "Lontchi", "James", "Rita"
  // ]
  arr = [
    {
      name: "Eric", age: 25,email:"yunweneric@gmal.com"
    },
    {
      name: "noel", age: 25,email:"yunweneric@gmal.com"
    },
    {
      name: "joy", age: 25,email:"yunweneric@gmal.com"
    },
    {
      name: "rita", age: 26,email:"yunweneric@gmal.com"
    },
    {
      name: "delight", age: 25,email:"yunweneric@gmal.com"
    },
    {
      name: "loveline", age: 27,email:"yunweneric@gmal.com"
    },
  ]
  color = "orange"
  getvalues = (val) => {
    console.log(val);

  }
  err = true
  Updatecolor = () => {
    this.err = !this.err
  }


  data = "Login data"
  date = Date.now();
  str ="Hello angular"
  money = 100.0


}

