/**
 * Created by zhang on 17-7-7.
 */
import {Component} from '@angular/core';


@Component({
  selector: 'progress-spinner',
  templateUrl: 'progress-spinner.component.html',
  styles: [`.example-h2 {
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
            }`],
})
export class ProgressSpinnerComponent {
  color = 'primary';
  mode = 'indeterminate';
  value = 100;
}
