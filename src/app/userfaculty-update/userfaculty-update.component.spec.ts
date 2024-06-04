import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfacultyUpdateComponent } from './userfaculty-update.component';

describe('UserfacultyUpdateComponent', () => {
  let component: UserfacultyUpdateComponent;
  let fixture: ComponentFixture<UserfacultyUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserfacultyUpdateComponent]
    });
    fixture = TestBed.createComponent(UserfacultyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
