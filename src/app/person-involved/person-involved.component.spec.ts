import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInvolvedComponent } from './person-involved.component';

describe('PersonInvolvedComponent', () => {
  let component: PersonInvolvedComponent;
  let fixture: ComponentFixture<PersonInvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInvolvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
