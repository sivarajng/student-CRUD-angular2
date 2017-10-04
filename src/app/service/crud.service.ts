import { Injectable } from '@angular/core';

@Injectable()
export class CrudService {

  studentsList: any;

  defaultStudentsList = {
    students: [{
      id: 12345
      , firstName: 'Arun'
      , lastName: 'Kumar'
      , department: 'ECE'
      , score: 87.80
      , email: 'arun.kumar@sms.com'
      , address: 'Koramangala, Bengaluru.'
    },
    {
      id: 23456
      , firstName: 'Abdul'
      , lastName: 'Latheef'
      , department: 'MECH'
      , score: 90
      , email: 'abdul.latheef@sms.com'
      , address: 'Electronic city, Bengaluru'
    },
    {
      id: 34567
      , firstName: 'Alex'
      , lastName: 'Pandian'
      , department: 'IT'
      , score: 95.60
      , email: 'alex.pandian@sms.com'
      , address: 'Electronic city, Bengaluru'
    }]
  };
  constructor() {

    const list = localStorage.getItem('studentsList');

    if (list === null || list === undefined) {
      console.log('DEFAULT STUDENTS LIST : ', this.defaultStudentsList);
      localStorage.setItem('studentsList', JSON.stringify(this.defaultStudentsList));
    } else {
      console.log('SAVED STUDENTS LIST : ', list);
      this.studentsList = JSON.parse(list);
    }

  }

  /* Clear Local Storage */
  clearLocalStorage() {
    console.log('Called RESET LOCAL STORAGE');
    localStorage.clear();
    localStorage.setItem('studentsList', JSON.stringify(this.defaultStudentsList));
    this.studentsList = this.defaultStudentsList;

  }

  /* Get Students List */
  getStudentsList() {

    console.log('Called STUDENTS LIST');
    return this.studentsList.students;

  }

  /* Add a new Student details */
  addStudent(student) {

    console.log('Called ADD STUDENT for ', student.id);
    this.studentsList.students.push(student);
    localStorage.setItem('studentsList', JSON.stringify(this.studentsList));

  }

  /* Update existing Student details */
  updateStudent(student) {

    console.log('Called UPDATE STUDENT for ', student.id);
    this.studentsList.students = this.studentsList.students.map((val) => {
      if (val.id === student.id) {
        val = student;
      }
      return val;
    });
    localStorage.setItem('studentsList', JSON.stringify(this.studentsList));

  }

  /* Delete an existing Student */
  deleteStudent(id) {

    console.log('Called DELETE STUDENT for ', id);
    this.studentsList.students = this.studentsList.students.filter(val => val.id !== id);
    localStorage.setItem('studentsList', JSON.stringify(this.studentsList));

  }

  /* Get Total number of Students */
  getStudentsListCount() {

    console.log('Called STUDENT COUNT');
    if (this.studentsList) {
      return this.studentsList.students.length;
    } else {
      return 0;
    }

  }


}
