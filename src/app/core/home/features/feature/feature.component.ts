import { Component, Input } from '@angular/core';
import { Feature } from 'src/app/util/feature';
import { pulseAnimation } from 'angular-animations';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  animations: [pulseAnimation({ direction: '=>', duration: 500, scale: 1.06 })]
})
export class FeatureComponent {
  @Input() feature: Feature;
  triggerPulse = false;
}
