import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  constructor(
    private _studentService : StudentService
  ) { }

  ngOnInit(): void {
  }
  onStudentAdd(studentForm : NgForm){
    if(studentForm.valid){
      let obj = {...studentForm.value, id : Math.floor(Math.random() * 10)};
      console.log(obj) 
      this._studentService.createStudent(obj)
     }

     studentForm.reset()
  }

}
