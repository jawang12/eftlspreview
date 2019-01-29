import { EmailInfo } from './../email.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { EmailService } from '../email.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-demo-form-modal',
  templateUrl: './demo-form-modal.component.html',
  styleUrls: ['./demo-form-modal.component.css']
})
export class DemoFormModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    public dialogRef: MatDialogRef<DemoFormModalComponent>
  ) {}

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
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName,
      numberOfEmployees,
      message
    } = this.form.value;

    const emailInfo = {
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName,
      numberOfEmployees,
      message
    };

    this.emailService
      .sendContactEmail(emailInfo as EmailInfo)
      .toPromise()
      .then(() => {
        // add spinner here
        setTimeout(() => {
          this.dialogRef.close();
        }, 1000);
        console.log('success from angular');
      })
      .catch(error => {
        console.log(error, 'err from angular');
      });
  }
}
