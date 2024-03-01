import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../shared/dark-mode.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'] // Use styleUrls instead of styleUrl
})
export class JobsComponent implements OnInit {
  isDarkMode$ = this.darkModeService.isDarkMode$;
  constructor(private darkModeService: DarkModeService) {}


  jobsData: any[] = []; // Declare an array to store the fetched data

  // constructor() { }

  ngOnInit() {
    this.fetchData(); // Call the function to fetch data when the component initializes
  }

  async fetchData() {
    try {
      const response = await fetch('../assets/data.json'); // Fetch data from data.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      this.jobsData = await response.json(); // Parse JSON response and assign to jobsData
      console.log(this.jobsData); // Log the fetched data
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
}
