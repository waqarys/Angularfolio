import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: 'What I do💁‍♂️',
    subTitle: 'FULL STACK DEVELOPER WITH EXPERTISE IN MICROSERVICES AND APPLICATION DEVELOPMENT',
    skills: [
      '⚡ Develop highly maintainable and scalable, distributed backend systems',
      '⚡ Creating application backend in Java, SpringBoot & Angular',
      '⚡ Integration of third party services such as Firebase/ Heroku/ AWS',
      '⚡ Artificial Intelligence and Machine Learning'
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
