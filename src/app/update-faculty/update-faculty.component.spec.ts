import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFacultyComponent } from './update-faculty.component';

describe('UpdateFacultyComponent', () => {
  let component: UpdateFacultyComponent;
  let fixture: ComponentFixture<UpdateFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFacultyComponent]
    });
    fixture = TestBed.createComponent(UpdateFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
