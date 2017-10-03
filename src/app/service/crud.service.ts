import { Injectable } from '@angular/core';

@Injectable()
export class CrudService {

  studentsList;

  defaultStudentsList = {
    students: [{
      id: 1
      , firstName: "firstName"
      , lastName: "lastName"
      , department: "department"
      , score: "10%"
      , email: "email"
      , address: "address"
    },
    {
      id: 2
      , firstName: "firstName"
      , lastName: "lastName"
      , department: "department"
      , score: "10%"
      , email: "email"
      , address: "address"
    }]
  };
  constructor() {
    //  localStorage.clear();
    console.log("studentsList 0 ", this.studentsList);
    let list = localStorage.getItem('studentsList');

    if (list === null || list === undefined) {
      console.log("studentsList 1 ", this.studentsList);
      localStorage.setItem('studentsList', JSON.stringify(this.defaultStudentsList));
    }
    else {
      console.log("studentsList 2 ", this.studentsList);
      this.studentsList = JSON.parse(list);
    }
    console.log("studentsList 3 ", this.studentsList);

  }

  getStudentsList() {
    return this.studentsList.students;
  }
  addStudent(student) {
    this.studentsList.students.push(student);
  }

  getStudentsListCount() {
    if (this.studentsList) {
      return this.studentsList.students.length;
    }
    else {
      0;
    }
  }


}
