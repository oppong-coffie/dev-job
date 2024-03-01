import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  toggleDarkMode() {
    const currentValue = this.isDarkModeSubject.getValue();
    this.isDarkModeSubject.next(!currentValue);
  }
}
