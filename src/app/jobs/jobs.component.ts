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


  jobsData:any[]=[] // Declare an array to store the fetched data
  data:any;
  location: string = ''
  fullTimeOny: boolean = true
  searchTerm: string = ''

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
      this.data=await response.json(); // Parse JSON response and assign to jobsData
      this.jobsData = this.data
      console.log(this.jobsData); // Log the fetched data
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }


  applySearchFilter(eventData: { searchTerm: string, location: string, fullTimeOnly: boolean }) {
    console.log('Search Term:', eventData);

    if (eventData.searchTerm || eventData.location || eventData.fullTimeOnly) {
        this.jobsData=this.data.filter((item: { company: string; position: string; contract: string; location: string; }) =>
                (!eventData.searchTerm || (item.company && item.company.toLowerCase().includes(eventData.searchTerm.toLowerCase())) ||
                                          (item.position && item.position.toLowerCase().includes(eventData.searchTerm.toLowerCase())) ||
                                          (item.contract && item.contract.toLowerCase().includes(eventData.searchTerm.toLowerCase()))) &&
                (!eventData.location || (item.location && item.location.toLowerCase().includes(eventData.location.toLowerCase()))) &&
                (!eventData.fullTimeOnly || (eventData.fullTimeOnly && item.contract && item.contract.toLowerCase() === 'full time'))
            );

    }  else {
        this.jobsData = this.data;
     }
}

}
