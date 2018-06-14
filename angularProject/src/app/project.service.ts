import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    {
      id: 1, 
      name: 'NetBoost', 
      description: 'A networking web application for students, companies and teachers using PHP and MySQL database', 
      startDate: new Date('1-10-2017'), 
      endDate: new Date('1-10-2017'), 
      completed: true,
      imageUrl: 'assets/images/netboost.png'
    },
    {
      id: 2, 
      name: 'Calendar', 
      description: 'Calendar app pulling events from the Google calendar using PHP and Google API', 
      startDate: new Date('1-10-2017'), 
      endDate: new Date('1-10-2017'), 
      completed: true,
      imageUrl: 'assets/images/calendar.png'
    },
    {
      id: 3, 
      name: 'NSHN Hospital Redesign', 
      description: 'Hospital Content Managaement System project using ASP.NET MVC and MSSQL database', 
      startDate: new Date('1-10-2017'), 
      endDate: new Date('1-10-2017'), 
      completed: true,
      imageUrl: 'assets/images/hospital.png'
    },
    {
      id: 4, 
      name: 'Comrade Cafe', 
      description: 'A restaurant website built with HTML5, CSS3, jQuery based on a comrade theme', 
      startDate: new Date('1-10-2017'), 
      endDate: new Date('1-10-2017'), 
      completed: true,
      imageUrl: 'assets/images/comrade.png'
    },
    {
      id: 5, 
      name: 'CSS Animation Project', 
      description: 'Beethoven CSS animation that uses webkit @keyframes and created a piano using CSS.', 
      startDate: new Date('1-10-2017'), 
      endDate: new Date('1-10-2017'), 
      completed: true,
      imageUrl: 'assets/images/animation.png'
    },
    {
      id: 6, 
      name: 'Portfolio website', 
      description: 'Built it as a CMS (here, Wordpress) that could help update content on my site easier', 
      startDate: new Date('1-10-2017'), 
      endDate: new Date('1-10-2017'), 
      completed: true,
      imageUrl: 'assets/images/portfolio.png'
    }
  ];

  // will modify the function by getting the array of projects w.r.t user
  getProjectsByUserId(userId: number): Observable<Project[]> {
    return of(this.projects);
  }

  constructor() { }
}
