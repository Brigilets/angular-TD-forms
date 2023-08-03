import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  genders = ['male', 'female', 'non-binary'];
  //remove f from onSubmit() in the template if using @ViewChild()
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer: string = '';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log('ngForm object', form);
  // }
  onSubmit() {
    console.log('sign up form with ViewChild', this.signupForm);
  }
}
