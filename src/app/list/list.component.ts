import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentsList: Array<any>;

  constructor(private crudService: CrudService, private router: Router) {
    this.studentsList = this.crudService.getStudentsList();
  }

  ngOnInit() {
  }

  AfterContentInit() {
    this.studentsList = this.crudService.getStudentsList();
  }

  /* route to update Student page */
  editStudent(id) {
    this.router.navigate(['/edit'], { queryParams: { id: id } });
  }

  /* Call Delete Student  Service */
  deleteStudent(id) {

    this.crudService.deleteStudent(id);
    setTimeout(() => { this.studentsList = this.crudService.getStudentsList(); alert('Successfully deleted'); }, 500);

  }

}
