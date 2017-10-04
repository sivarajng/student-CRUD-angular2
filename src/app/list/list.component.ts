import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
// import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentsList;

  studentCount = 0;
  constructor(private crudService: CrudService, private router: Router) {
    this.studentsList = this.crudService.getStudentsList();
    console.log("studentsList 4 ", this.studentsList);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.studentsList = this.crudService.getStudentsList();
  }

  editStudent(id) {
    //this.crudService.edit();
    this.router.navigate(['/edit'], { queryParams: { id: id } });
  }

  deleteStudent(id) {
     this.crudService.deleteStudent(id);
    setTimeout(() => { this.studentsList = this.crudService.getStudentsList();alert("Successfully deleted") }, 500);
  }

}
