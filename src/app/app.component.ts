import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  counterActives: number;
  counterInactives: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.counterActives = this.counterService.inactiveToActive;
    this.counterInactives = this.counterService.activeToInactive;
  }
}
