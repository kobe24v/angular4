/**
 * Created by zhang on 17-6-22.
 */
import { Component } from '@angular/core';
import {NguiScrollableDirective} from "@ngui/scrollable";


@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.html',
  styleUrls: ['./scrollable.css']
})
export class ScrollableComponent {
  id: string = 's1';
  hid: string = 'h1';
  wid: string = 'w1';
  scrollTo(selector: string, parentSelector: string, horizontal: boolean) {
    NguiScrollableDirective.scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      0              // distance from top or left
    );
  }
}
