/**
 * Created by zhang on 17-6-22.
 */
import {trigger, state, style, transition, animation, keyframes, animate} from '@angular/animations';
import {Component} from '@angular/core';

@Component({
  selector: 'app-animation',
  styles: [`
  p{
    width:200px;
    height:100px;
    background:lightgray;
    margin:100px auto;
    text-align:center;
    font-size:1.5em;
  }
  `],
  template: `
    <p [@myAwesomeAnimation]="state" (mouseover)="animateMe()" (mouseout)="animateMe()">sdf</p>
  `,
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
          transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1)',
      })),
      transition('small <=> large', animate(100, style({ width: '0px'}))),
    ]),
  ]
})
// keyframes([
//   style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
//   style({opacity: 1, transform: 'translateY(35px)', offset: 0.5}),
//   style({opacity: 1, transform: 'translateY(0)', offset: 1}),
// ])
export class AnimationComponent {
  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
