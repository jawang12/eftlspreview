import { FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {
  socials,
  features,
  pricing,
  ourCompany,
  resources,
  categories
} from './../../util/footer';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  categories = categories;
  listItems = [features, pricing, resources, ourCompany];
  socials = socials;
  faCopyright = faCopyright;
  isInvalidEmail = false;
  email = new FormControl('', [Validators.required, Validators.email]);

  onSubmit() {
    if (this.email.invalid) {
      this.isInvalidEmail = true;
      return;
    }
    this.isInvalidEmail = false;
    console.log('success');
    return;
  }
}
