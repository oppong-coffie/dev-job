import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DarkModeService } from '../shared/dark-mode.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  isDarkMode$ = this.darkModeService.isDarkMode$;
  

  jobsDetail: any[] = [];
  id: string;

  constructor(private route: ActivatedRoute, private darkModeService: DarkModeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); // Get the ID from the URL
    console.log('ID from URL:', this.id); // Check if ID is retrieved
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('../assets/data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      
      // Filter the data based on the ID
      this.jobsDetail = jsonData.filter(item => item.id === parseInt(this.id, 10)); // Convert id to number

      console.log(this.jobsDetail);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  
}
