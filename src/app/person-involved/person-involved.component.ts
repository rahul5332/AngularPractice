import { Component, Output, EventEmitter } from '@angular/core';
import { PersonInvolved } from '../PersonInvolved';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-person-involved',
  templateUrl: './person-involved.component.html',
  styleUrls: ['./person-involved.component.css']
})
export class PersonInvolvedComponent {

  constructor(public activeModal: NgbActiveModal) { }
  employee = new PersonInvolved();
  @Output() employeeEvent = new EventEmitter<PersonInvolved>();

  AddEmployee() {
    this.employeeEvent.emit(this.employee);   
  }
}
