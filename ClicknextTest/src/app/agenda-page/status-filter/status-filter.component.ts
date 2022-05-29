import { Component, OnInit } from '@angular/core';
import { AgendaApp, StoreStatus } from 'src/app/store';
import { Status } from '../event-list/event-list.component';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  constructor() { }

  status : StoreStatus = {}

  ngOnInit(): void {
    this.status = AgendaApp.store.status
  }

  onChange(status:Status): void{
    AgendaApp.toggleStatus(status);
  }

}
