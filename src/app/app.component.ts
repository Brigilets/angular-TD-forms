import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //remove f from onSubmit() in the template if using @ViewChild()
  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female', 'non-binary'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // Overrides the already filled in values,dus not ideal

    // this.signupForm.setValue({
    //   userdata: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: '',
    // });

    // Allows us to override precise value
    this.signupForm.form.patchValue({ userdata: { username: suggestedName } });
  }

  // onSubmit(form: NgForm) {
  //   console.log('ngForm object', form);
  // }
  onSubmit() {
    console.log('sign up form with ViewChild', this.signupForm);
  }
}
