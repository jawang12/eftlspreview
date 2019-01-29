import { Component } from '@angular/core';
import { featuresList } from 'src/app/util/feature';
import { pulseAnimation } from 'angular-animations';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = featuresList;
}
