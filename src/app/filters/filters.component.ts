import { Component } from '@angular/core';
import { DarkModeService } from '../shared/dark-mode.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  isDarkMode$ = this.darkModeService.isDarkMode$;

  constructor(private darkModeService: DarkModeService) {}

}
