import { Component, Input, OnInit,  } from '@angular/core';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  @Input() username: string = 'Nastya';

  greeting: string = '';

  constructor() {}

  ngOnInit(): void {
    this.setGreeting();
  }
  
  private setGreeting(): void {
    const myDate = new Date();
    const currentHour = myDate.getHours();

    if (currentHour < 12) {
      this.greeting = 'Good Morning';
    } else if(currentHour == 12)
      this.greeting = 'Good Noon';
    else if (currentHour >= 12 && currentHour <= 17)
      this.greeting = 'Good Afternoon';
    else if (currentHour >= 17 && currentHour <= 24)
      this.greeting = 'Good Evening';
  }
}
