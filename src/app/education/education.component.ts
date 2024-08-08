import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: 'PG - AIML',
      duration: '2024',
      subtitle: 'University Of Texas',
      content: 'Currently pursuing post graduation course affiliated with University of Texas in AIML',
      className1: 'mar-right',
      className2: 'prt_about_learnbox_left'
    },
    {
      heading: 'Diploma - Finance',
      duration: '2015',
      subtitle: 'Bombay Stock Exchange',
      content: 'Successfully completed my Diploma in Investment and Finance from Bombay Stock Exchange.',
      className1: 'mar-left',
      className2: 'prt_about_learnbox_right'
    },
    {
      heading: 'B.E - Electronics & Telecommunications Engineering',
      duration: '2012',
      subtitle: 'Mumbai University',
      content: 'Successfully completed my B.E in Electronics & Telecommunications from University Of Mumbai.',
      className1: 'mar-right',
      className2: 'prt_about_learnbox_left'
    },
    {
      heading: 'Higher Secondary(12th)',
      duration: '2008',
      subtitle: 'Maharashtra State Board',
      content: 'Successfully completed my intermediate studies in 2008 from St. Xavier\'s College, Mumbai.\n' +
        'Major: Science.',
      className1: 'mar-left',
      className2: 'prt_about_learnbox_right'
    },
    {
      heading: 'Secondary Stage(10th)',
      duration: '2006',
      subtitle: 'Maharashtra State Board',
      content: 'Successfully completed my high school studies in 2006 from St. Joseph\'s High School, Mumbai.',
      className1: 'mar-right',
      className2: 'prt_about_learnbox_left'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
