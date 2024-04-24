import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/student.interface';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentArr !: Array<Istudent>
  constructor(
    private _studentService : StudentService
  ) { }

  ngOnInit(): void {
    this.studentArr = this._studentService.fetchAllStudent()
  }

}
