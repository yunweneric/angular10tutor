import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../usersdata.service';

@Component({
  selector: 'app-treated',
  templateUrl: './treated.component.html',
  styleUrls: ['./treated.component.css']
})
export class TreatedComponent implements OnInit {
data;
  constructor(Service: UsersdataService) { 
    this.data = Service.data;
  }

  ngOnInit(): void {
  }

}
