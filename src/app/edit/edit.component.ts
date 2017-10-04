import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Params,Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id;
  studentsList;
  student;
  constructor(private crudService: CrudService, private activatedRoute: ActivatedRoute,private router:Router) {

    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
      console.log("edit ", this.id);
    });


    this.student = {
      id: 0
      , firstName: ""
      , lastName: ""
      , department: ""
      , score: null
      , email: ""
      , address: ""
    };

    this.studentsList = this.crudService.getStudentsList().filter(val => val.id == this.id);
    this.student = this.studentsList[0];

  }

  ngOnChanges(){
    this.student = this.studentsList[0];
  }
  ngAfterContentInit(){
    this.student = this.studentsList[0];
  }
  ngAfterContentChecked(){
    this.student = this.studentsList[0];
  }
  ngAfterViewInit(){
    this.student = this.studentsList[0];
  }
  ngAfterViewChecked(){
    this.student = this.studentsList[0];
  }


  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
      console.log("edit ", this.id);
    });

    this.studentsList = this.crudService.getStudentsList().filter(val => val.id == this.id);
    this.student = this.studentsList[0];
  }

  updateStudent(student) {
    this.crudService.updateStudent(this.student || student);

    setTimeout(() => { this.router.navigate(['/list']);alert("Successfully updated") }, 500);

  }
}
