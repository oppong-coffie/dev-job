import { Component, Output, EventEmitter } from '@angular/core';
import { DarkModeService } from '../shared/dark-mode.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  isDarkMode$ = this.darkModeService.isDarkMode$;
  show = false;

  constructor(private darkModeService: DarkModeService) {}

  @Output() searchChange = new EventEmitter<{ searchTerm: string, location: string, fullTimeOnly: boolean }>();

  searchTerm: string = "";
  location: string = "";
  fullTimeOnly: boolean = false;
  backgroundColor: string = ''; 

  onSearchChange() {
    const searchData = {
      searchTerm: this.searchTerm,
      location: this.location,
      fullTimeOnly: this.fullTimeOnly
    };
    this.searchChange.emit(searchData);
    this.show=false

  }
  // METHOD TO HANDLE SHOW
  showfilter(){
    this.show=!this.show
  }

  // Method to handle the click event
  onSearchFilt() {
    document.addEventListener('DOMContentLoaded', () => {
      // Set the background color of the body element
      document.body.style.backgroundColor = '#f4f6f8';
    });  }  
}
