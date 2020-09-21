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
  dis = false;
  show = "blue";

  // keyup = () =>{
  //   return "hello"
  // }

}
