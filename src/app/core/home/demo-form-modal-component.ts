import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-modal',
  templateUrl: './demo-form-modal.component.html',
  styleUrls: ['./demo-form-modal.component.css']
})
export class DemoFormModalComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
  }

  private formInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.min(10),
        Validators.pattern(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        )
      ]),
      companyName: ['', Validators.required],
      numberOfEmployees: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9][0-9]*$/)
      ]),
      message: ['']
    });
  }

  isValid(formControlName: string) {
    return this.form.get(formControlName).invalid;
  }

  getMessageLength() {
    return this.form.get('message').value.length;
  }

  onSubmit() {
    console.log(this.form);
  }
}
