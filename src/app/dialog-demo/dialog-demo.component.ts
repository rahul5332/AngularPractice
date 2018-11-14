import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonInvolved } from '../PersonInvolved';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent {
  @Input() name;
  employee: PersonInvolved;

  constructor(public activeModal: NgbActiveModal) { } 

  OnAddEmployee($event) {
    this.employee = $event;
    console.log(this.employee);
  }
}
