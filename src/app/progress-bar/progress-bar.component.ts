/**
 * Created by zhang on 17-7-7.
 */
import {Component} from '@angular/core';


@Component({
  selector: 'progress-bar',
  template: `
  <md-progress-bar
          class="example-margin"
          [color]="color"
          [mode]="mode"
          [value]="value"
          [bufferValue]="bufferValue">
      </md-progress-bar>
  `,
  styles: [`
        .example-h2 {
        margin: 10px;
      }
      .example-section {
        display: flex;
        align-content: center;
        align-items: center;
        height: 60px;
      }
      .example-margin {
        margin: 0 10px;
      }
  `],
})
export class ProgressBarComponent {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;
}
