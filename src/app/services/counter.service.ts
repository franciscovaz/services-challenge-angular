import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  setActiveToInactive() {
    this.activeToInactive++;
    console.log(this.activeToInactive);
  }

  setInactiveToActive() {
    this.inactiveToActive++;
    console.log(this.inactiveToActive);
  }
}
