import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: 'https://github.com/waqarys',
    linkedin: 'https://www.linkedin.com/in/shaikhwaqar/',
    gmail: 'waqaryshaikh@gmail.com',
    instagram : 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
