import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  data = [
  ]
  Submitval(f) {
    this.data.push(f.value.username)
    console.log(this.data)
  }

  constructor() { }/* An empty array that is responsible 
  to add a division */
  public items = [];

  /* A two-way binding performed which 
    pushes text on division */
  public newTask;
  public newTask2;
  public newTask3;


  /* When input is empty, it will 
    not create a new division */
  public addToList() {
    if (this.newTask == '') {
    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  /* This function takes to input the 
    task, that has to be deleted*/
  public deleteTask(index) {
    this.items.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
