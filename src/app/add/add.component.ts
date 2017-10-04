import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student;
  constructor(private crudService: CrudService,private router:Router) {
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
    this.crudService.addStudent(this.student);
    setTimeout(() => { this.router.navigate(['/list']);alert("Successfully added") }, 500);
  }
}
