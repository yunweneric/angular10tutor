import { Component, OnInit } from '@angular/core';
// import {FormModule } from 'angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  Submitval(val){
    console.log(val.value);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
