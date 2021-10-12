import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isUpdated = false;
  selectedIndex: any;
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

    if (this.isUpdated) {
      this.formData[this.selectedIndex] = this.contactForm.value;
    } else {
      this.formData.push(this.contactForm.value);
    }
    this.isUpdated = false;
    this.contactForm.reset();
  }

  delete(index) {
    this.formData.splice(index, 1);
  }

  update(data, index) {
    console.log('data::::', data);
    console.log('index:::', this.formData[index]);
    this.isUpdated = true;
    this.selectedIndex = index;
    this.contactForm.patchValue(this.formData[index]);
  }
}
