import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  studentCount: number;
  constructor(private crudService: CrudService) {
    this.studentCount = 0;
  }


  ngOnInit() {
  }

  ngAfterContentInit() {
    this.studentCount = this.crudService.getStudentsListCount();
  }

}
