import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdeatilComponent } from './studentdeatil.component';

describe('StudentdeatilComponent', () => {
  let component: StudentdeatilComponent;
  let fixture: ComponentFixture<StudentdeatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdeatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
