import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent{
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password :new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
  });

  get username(){
    return this.form.get('username');
  };
  collectdata(){
    console.log(this.form.value);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
