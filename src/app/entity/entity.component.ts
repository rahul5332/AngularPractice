import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonInvolvedComponent } from '../person-involved/person-involved.component';
import { PersonInvolved } from '../PersonInvolved';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityComponent implements OnInit {

  constructor(private modalService: NgbModal, private cd: ChangeDetectorRef) {
    //this.employees = 'Using ChangeDetectionStrategy.OnPush';
  }

  employees: PersonInvolved[] = [];

  open() {
    const modalRef = this.modalService.open(PersonInvolvedComponent);
    modalRef.componentInstance.employeeEvent.subscribe((emmitedValue) => {
      this.employees.push(emmitedValue);
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
  }
}
