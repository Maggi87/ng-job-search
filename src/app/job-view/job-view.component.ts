import { Component } from '@angular/core';
import { JobDetails } from '../model/job';
import { JobService } from '../service/job.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-job-view',
  standalone: true,
  imports: [DatePipe, RouterLink, NgIf],
  templateUrl: './job-view.component.html',
  styleUrl: './job-view.component.css'
})
export class JobViewComponent {

  jobDetails: JobDetails | undefined;
  jobId: number | undefined;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //captures changes to the 'id' parameter in the route and updates the jobId property accordingly.
    this.route.params.subscribe(params => {
      this.jobId = +params['id'];
      this.getJobDetails(this.jobId);
    })
  }

  //fetch job details using job id
  getJobDetails(id: number) {
    this.jobService.getJobDetailsById(id).subscribe((data) => {
      this.jobDetails = data;
    }, (error) => {
      alert("Error :" + error.message);
      this.backToHome();
    })
  }

  //redirect to joblist page
  backToHome(): void {
    this.router.navigate(['/job-list']);
  }
}
