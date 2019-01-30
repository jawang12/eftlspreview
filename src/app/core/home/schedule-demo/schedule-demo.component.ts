import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService, EmailInfo } from '../../email.service';

@Component({
  selector: 'app-schedule-demo',
  templateUrl: './schedule-demo.component.html',
  styleUrls: ['./schedule-demo.component.css']
})
export class ScheduleDemoComponent implements OnInit {
  demo: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit() {
    this.formInit();
  }

  private formInit() {
    this.demo = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.min(10),
          Validators.pattern(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
          )
        ]
      ],
      companyName: ['', Validators.required],
      numberOfEmployees: ['', Validators.required],
      message: ['']
    });
  }

  isInvalid(formControlName: string) {
    return this.demo.get(formControlName).invalid;
  }

  getMessageLength() {
    return this.demo.get('message').value.length;
  }

  onSubmit() {
    if (this.demo.invalid) {
      return;
    } else {
      console.log(this.demo);
      this.emailService
        .sendContactEmail(this.demo.value as EmailInfo)
        .toPromise()
        .then(() => console.log('sent sucessfully from Angular'))
        .catch(error => console.log(error, 'unable to send mail from Angular'));
    }
  }
}
