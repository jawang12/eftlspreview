import { Component } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  template: `
    <div style="text-align: center; font-family: Raleway">
      <h1 matDialogTitle>Accounting. The way it ought to be.</h1>

      <mat-dialog-content
        ><iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UKlywgu8zH0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></mat-dialog-content>

      <mat-dialog-actions align="center">
        <button mat-button color="primary" matDialogClose>Close</button>
      </mat-dialog-actions>
    </div>
  `
})
export class VideoModalComponent {
  constructor() {}
}
