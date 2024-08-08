import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: 'Contact Me ☎️',
    subtitle: 'Discuss a project or just want to say hi? My Inbox is open for all.',
    number: '+91-9167453953',
    email_address: 'waqaryshaikh@gmail.com'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
