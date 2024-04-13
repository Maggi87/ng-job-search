import { Component } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../service/job.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [NgFor, RouterLink, NgClass, NgIf],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {

  jobs: Job[] = [];
  favoriteJobs!: Job[];

  subscription$: Subscription | undefined;

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.getJobList();
    this.getFavoriteJobs();
  }

  //Fetch all favorite job list
  getFavoriteJobs() {
    this.favoriteJobs = this.jobService.getFavoriteJobs();
  }

  // check if a job is in the favorites list 
  isFavorite(jobId: number): boolean {
    return this.favoriteJobs.some(job => job.id === jobId);
  }

  //Fetch all job list
  getJobList() {
    this.subscription$ = this.jobService.getAllJobList().subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        alert('Error fetching jobs:' + error.message);
      })
  }

  //The click on the star should be managed in order to add or remove the selected job in a favorite list
  toggleFavorite(job: Job) {
    this.jobService.addAndRemoveFavoriteJobs(job);
  }

  //unsubscribe job service method
  ngOnDestroy() {
    this.subscription$?.unsubscribe();
  }
}
