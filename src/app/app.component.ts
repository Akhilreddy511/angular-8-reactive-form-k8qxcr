import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formData = [{ fullName: 'akhil', email: 'akhil@123.com', message: 'hello' }];
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: [''],
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value);
    this.formData.push(this.contactForm.value);
  }

  delete(index) {
    this.formData.splice(index, 1);
  }

  update(data, index) {
    console.log('data::::', data);
    console.log('index:::', this.formData[index]);

    this.contactForm.patchValue(this.formData[index]);
  }
}
