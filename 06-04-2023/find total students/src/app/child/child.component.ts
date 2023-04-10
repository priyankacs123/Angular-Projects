import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() totalStudents: number;
  @Input() totalMales: number;
  @Input() totalFemales: number;

  students = [
    {id: 1, name: 'Priyanka', gender: 'Female', dob: '01-01-2000', coursefee: 500},
    {id: 2, name: 'Rachana', gender: 'Female', dob: '02-02-2001', coursefee: 600},
    {id: 3, name: 'Prathibha', gender: 'Female', dob: '03-03-2002', coursefee: 700},
    {id: 4, name: 'Sahana', gender: 'Male', dob: '04-04-2003', coursefee: 800},
    {id: 5, name: 'Shamanth', gender: 'Male', dob: '05-05-2004', coursefee: 900}
  ];

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
