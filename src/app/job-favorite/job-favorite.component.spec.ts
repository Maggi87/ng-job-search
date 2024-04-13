import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFavoriteComponent } from './job-favorite.component';

describe('JobFavoriteComponent', () => {
  let component: JobFavoriteComponent;
  let fixture: ComponentFixture<JobFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobFavoriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
