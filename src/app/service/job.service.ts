import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Job, JobDetails } from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private job_url = '/jobs';

  private favoriteJobs: Job[] = [];

  constructor(private http: HttpClient) { }

  //returns the list of favorite jobs stored in the 'favoriteJobs array'
  getFavoriteJobs(): Job[] {
    return this.favoriteJobs;
  }

  //adds or removes a job from the list of favoriteJobs based on whether it's already present.
  addAndRemoveFavoriteJobs(job: Job) {
    const index = this.favoriteJobs.findIndex(favoriteJob => favoriteJob.id === job.id);
    if (index === -1) {
      this.favoriteJobs.push(job);
    } else {
      this.favoriteJobs.splice(index, 1);
    }
  }

  //return all job list
  getAllJobList(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.job_url}`)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  //search job by id
  getJobDetailsById(id: number): Observable<JobDetails> {
    return this.http.get<JobDetails>(`${this.job_url}/${id}`)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  //Handle error
  errorHandler(error: Error) {
    return throwError(error);
  }
}
