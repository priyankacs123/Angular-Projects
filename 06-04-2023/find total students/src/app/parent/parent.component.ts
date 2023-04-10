import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})


export class ParentComponent {
  students = [
    {id: 1, name: 'Priyanka', gender: 'Female', dob: '01-01-2000', coursefee: 5000},
    {id: 2, name: 'Rachana', gender: 'Female', dob: '02-02-2001', coursefee: 6500},
    {id: 3, name: 'Prathibha', gender: 'Female', dob: '03-03-2002', coursefee: 7000},
    {id: 4, name: 'Sahana', gender: 'Male', dob: '04-04-2003', coursefee: 8800},
    {id: 5, name: 'Shamanth', gender: 'Male', dob: '05-05-2004', coursefee: 10900}
  ];

  constructor(private dialog:MatDialog){

  }
  onSubmit(form: NgForm) {
    const newStudent = {
      id: this.students.length + 1,
      name: form.value.studentName,
      gender: form.value.gender,
      dob: form.value.dob,
      coursefee: form.value.coursefee
    };
    this.students.push(newStudent);
    form.reset();
  }
  getTotalStudents() {
    return this.students.length;
  }
  
  getTotalMales() {
    return this.students.filter(student => student.gender === 'Male').length;
  }
  
  getTotalFemales() {
    return this.students.filter(student => student.gender === 'Female').length;
  }
}
