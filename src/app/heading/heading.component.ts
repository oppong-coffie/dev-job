import { Component } from '@angular/core';
import { DarkModeService } from '../shared/dark-mode.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  check=true
  btnimg="../../assets/desktop/icon-toggle.svg"
  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.check=!this.check
    // this.btnimg="../../assets/desktop/icon-toggle.svg"
    this.darkModeService.toggleDarkMode();
    this.btnimg=this.check ? "../../assets/desktop/icon-toggle.svg" : "../../assets/desktop/icon-toggleDark.svg"
    
  }
}
