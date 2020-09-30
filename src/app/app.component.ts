// import { NAMED_ENTITIES } from '@angular/compiler';
import { Component } from '@angular/core';
import { UsersdataService } from './usersdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Title element"
  data;
  decide = "bg-primary"

  constructor(service: UsersdataService) {
    this.data = service.data;

  }
  getdata(event) {
    console.log(event.value)

  }
  course = {
    title: "The bush seller",
    Age: 12,
    students: 30123,
    releaseDate: new Date(2016, 3, 1),
    price: 23300,
  }
}  