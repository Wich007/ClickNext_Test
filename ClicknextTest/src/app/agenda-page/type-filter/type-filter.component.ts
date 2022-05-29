import { Component, OnInit } from '@angular/core';
import { AgendaApp, StoreType } from 'src/app/store';
import { onChange } from 'store';
import { EventType } from '../event-list/event-list.component';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css']
})
export class TypeFilterComponent implements OnInit {

  type: StoreType ={};

  constructor() { }

  ngOnInit(): void {
    this.type = AgendaApp.store.type
    // onChange ( AgendaApp.store, store =>store.type, type => {
    //   console.log (type);
    // });
  }

  onChange(type:EventType): void{
    AgendaApp.toggleType(type);
  }

}
