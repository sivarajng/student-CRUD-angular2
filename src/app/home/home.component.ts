import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  studentCount = 0;
  constructor(private crudService: CrudService) {
  }


  ngOnInit() {
  }

  ngAfterContentInit() {
    this.studentCount = this.crudService.getStudentsListCount();
  }

}
