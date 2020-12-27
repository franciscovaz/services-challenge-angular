import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  setActiveToInactive() {
    this.activeToInactive++;
    console.log('Active to Inactive: ', this.activeToInactive);
  }

  setInactiveToActive() {
    this.inactiveToActive++;
    console.log('Inactive to Active: ', this.inactiveToActive);
  }
}
