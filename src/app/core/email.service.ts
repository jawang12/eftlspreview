import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailService {
  constructor(private http: HttpClient) {}

  sendContactEmail(details) {
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
