import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student;
  constructor(private crudService: CrudService) {
    this.student = {
      id: 0
      , firstName: ""
      , lastName: ""
      , department: ""
      , score: null
      , email: ""
      , address: ""
    };

  }

  ngOnInit() {
  }

  addStudent() {
    this.student.id = Math.round(Math.random() * 1000000);
    console.log("student : ", this.student);
  this.crudService.addStudent(this.student);
  }
}
