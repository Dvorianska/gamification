import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/app/user/models/achievement.model';

@Component({
  selector: 'app-p-achievments',
  templateUrl: './p-achievments.component.html',
  styleUrls: ['./p-achievments.component.scss']
})
export class PAchievmentsComponent implements OnInit {
  achievements: Achievement[] = [
    {name: 'Exoft turbo power', addedTime: new Date(), xp: 10},
    {name: 'Exoft turbo power', addedTime: new Date(), xp: 15},
    {name: 'Exoft skylark power', addedTime: new Date(), xp: 20},
    {name: 'Exoft corporate power', addedTime: new Date(), xp: 20},
  ];

  constructor()
   {const max = 100;
    let counter = 0;
    
    if (counter < max) {
        counter++;
    } }
//   achives: {achiveName: string, timeAgo: Date, xp: number}[] = [
//     {achiveName: 'Exoft turbo power', timeAgo: new Date(), xp: 15},
//     {achiveName: 'Exoft turbo power', timeAgo: new Date(), xp: 15},
//     {achiveName: 'Exoft skylark power', timeAgo: new Date(), xp: 20},
//     {achiveName: 'Exoft corporate power', timeAgo: new Date(), xp: 20},
    
//  ]

 
  ngOnInit(): void {
  }

}

 