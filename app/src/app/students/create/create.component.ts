import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';
import { Student } from '../../interfaces/student';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  student: Student = {

    studentNumber: 300123456,
    password: 'password',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Example Street',
    city: 'Toronto',
    phoneNumber: '416-123-4456',
    email: 'jdoe@example.com',
    program: 'Software Engineering Technology',
    courses: undefined
  };
  constructor(private _router: Router,
    private _studentsService: StudentsService,
    //  add alert service
    private _alertService: AlertService) { }

  create() {
    this._studentsService
      .create(this.student)
      .subscribe(createdStudent => {
        //  add alert service
        // keep showing the alert even after redirected to /student/details/:id
        this._alertService.success(`Student (#${createdStudent.studentNumber}) successfully created`, true);
        // updated route
        this._router.navigate(['/students/details'],
          { queryParams: { 'id': createdStudent._id } }
        );
      },
        // add alert service
        error => this._alertService.error(error));
  }
}