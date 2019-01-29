import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface EmailInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  numberOfEmployees: string;
  message: string;
}
@Injectable()
export class EmailService {
  constructor(private http: HttpClient) {}

  sendContactEmail(details: EmailInfo) {
    return this.http.post(
      'https://us-central1-efortles-web.cloudfunctions.net/sendContactEmail',
      details,
      {
        reportProgress: true,
        responseType: 'text'
      }
    );
  }
}
