import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentsList;
  
  studentCount=0;
  constructor(private crudService: CrudService) {
    this.studentsList = this.crudService.getStudentsList();
     console.log("studentsList 4 ", this.studentsList);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.studentsList = this.crudService.getStudentsList();
  }

}
