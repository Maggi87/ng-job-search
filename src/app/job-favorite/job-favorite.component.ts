import { Component } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../service/job.service';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-favorite',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './job-favorite.component.html',
  styleUrl: './job-favorite.component.css'
})
export class JobFavoriteComponent {

  favoriteJobs: Job[] | undefined;

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.getFavoriteJobs();
  }

  //Fetch all favorite job list
  getFavoriteJobs() {
    this.favoriteJobs = this.jobService.getFavoriteJobs();
  }
}
