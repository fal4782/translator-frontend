import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  prerequisite() {
    this.createForm();
  }

  registrationForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.prerequisite();
  }

  createForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: [],
      lastName: [],
      email: [],
      phone: [],
      gender: [],
    });
  }

  get registrationFormControl() {
    return this.registrationForm.controls;
  }
}
