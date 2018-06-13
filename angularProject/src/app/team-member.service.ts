import { Injectable } from '@angular/core';
import { TeamMember } from './team-member';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {

  teamMembers: TeamMember[] = [
     {
       id: 1,
       name: 'Princy Mascarenhas',
       role: 'Web Developer and Blogger',
       portfolio: 'http://www.princymascarenhas.com',
       bio: 'Love for design, content curation through my blog & website development',
       birthday: new Date('3-30-1992'),
       isWorkingStatus: false,
       profileImage: './assets/images/PrincyMascarenhas.JPG'
     },

     {
      id: 2,
      name: 'Elizabeth Reji',
      role: 'Web Developer and Singer',
      portfolio: 'http://www.emreji.com',
      bio: 'Hi, I am a brand new web developer who loves to build web applications. I also sing when I am not building websites',
      birthday: new Date('1-07-1992'),
      isWorkingStatus: false,
      profileImage: './assets/images/ElizabethReji.jpg'
     }
  ];

  getTeamMembers(memberId?: number): Observable<TeamMember[]> { // getTeamMembers() here right now returns all of the results  

      return of(this.teamMembers);
   }

  constructor() { }
}
