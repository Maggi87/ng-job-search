import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobFavoriteComponent } from './job-favorite/job-favorite.component';
import { JobViewComponent } from './job-view/job-view.component';

export const routes: Routes = [
        {
                path: 'job-list', component: JobListComponent
        },
        {
                path: 'job-favorite', component: JobFavoriteComponent
        },
        {
                path: 'job-view/:id', component: JobViewComponent
        },
        {
                path: '**', redirectTo: 'job-list', pathMatch: 'full'
        }
];
