import { Component, OnInit } from '@angular/core';
import {MassageService} from '../massage.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MassageService) {}

  ngOnInit() {
  }

}
