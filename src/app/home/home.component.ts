import { Component } from '@angular/core';
import { DarkModeService } from '../shared/dark-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isDarkMode$ = this.darkModeService.isDarkMode$;

  constructor(private darkModeService: DarkModeService) {}
}
