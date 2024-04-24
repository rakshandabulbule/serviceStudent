import { Injectable } from "@angular/core";
import { Istudent } from "../models/student.interface";




@Injectable({
    providedIn : "root"
})
export class StudentService {
    studentArray : Array<Istudent> = [
    {
        fname : "Rakshanda",
        lname : "Bulbule",
        email : "rb@gmail.com",
        contact : 1235733488390
    },
    {
        fname : "Meksha",
        lname : "Bulbule",
        email : "mb@gmail.com",
        contact : 90842978675521
    }
]

fetchAllStudent() : Array<Istudent>{
    return this.studentArray;
}

createStudent(student : Istudent){
    this.studentArray.push(student)
}

}