import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  // animations:[  trigger('list1', [
  //   state('in', style({
  //     opacity: 1,
  //     transform: 'translateX(0)'
  //   })),
  //   transition('void => *', [
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(-100px)'
  //     }),
  //     animate(300)
  //   ]),
  //   transition('* => void', [
  //     animate(300, style({
  //       transform: 'translateX(100px)',
  //       opacity: 0
  //     }))
  //   ])
  // ])]
  //
  //
  // animations: [
  //   trigger('visibilityChanged', [
  //     state('in', style({
  //       opacity: 0
  //     })),
  //     state('out',   style({
  //       opacity: 1
  //     })),
  //     transition('in => out', animate('100ms ease-in')),
  //     transition('out => in', animate('100ms ease-out'))
  //   ])
  // ]


})
export class GreetingComponent implements OnInit {
  greeting = {
    username: 'Waqar Yunus Shaikh',
    title: 'Hi all, I\'m Waqar',
    subTitle: 'A passionate Software Developer 🚀 having an experience of building Microservices and Web applications with Java / Scala / Springboot / Akka / Play / Angular and some other cool libraries and frameworks.',
    resumeLink: 'https://docs.google.com/document/d/e/2PACX-1vSXDJg3x6LBHL9Jt8F4SDYV_DbGBbdjyTFEqY44uWCueDGUF6_UxUrutuAsIidXkm_965s9fzgtvAUj/pub'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
