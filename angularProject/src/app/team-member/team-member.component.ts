import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../team-member';
import { TeamMemberService } from '../team-member.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  members: TeamMember[] = [];

  constructor(private teamMemberService: TeamMemberService) { }

  ngOnInit() {

    this.teamMemberService.getTeamMembers(1).subscribe( members => this.members = this.members);

  }

}
