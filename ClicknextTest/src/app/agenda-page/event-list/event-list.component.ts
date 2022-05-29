import { Component, OnInit } from '@angular/core';
import { AgendaApp, StoreStatus, StoreType } from 'src/app/store';
import { onChange } from 'store';

export type EventType = 'to_consider' | 'continue' | 'inform' | 'secret';
export type Status = 'published' | 'draft'

type Participant = {
  imageURL: string;
}

type Event = {
  id: number;
  publish: boolean;
  time: string;
  type: EventType;
  detail: string;
  participants: Participant[];
  max_participants: number;
}

type DateEvent = {
  date: string;
  events: Event[];
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: DateEvent[] = [];
  allEvents : DateEvent[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.allEvents = [{
      date: '10 มกราคม 2565',
      events: [{
        id: 1,
        publish : true,
        time: '09.00-11.00',
        type: "continue",
        detail: 'การตัดสินใจเรื่องการลงทุนติดตั้งคอมพิวเตอร์องค์กรใหม่',
        participants: [{
          imageURL: 'https://picsum.photos/200/300?random=1'
        },{
          imageURL: 'https://picsum.photos/200/300?random=1'
        },{
          imageURL: 'https://picsum.photos/200/300?random=1'
        },{
          imageURL: 'https://picsum.photos/200/300?random=1'
        },{
          imageURL: 'https://picsum.photos/200/300?random=1'
        }],
        max_participants: 20
      },
      {
        id: 1,
        publish : true,
        time: '09.00-11.00',
        type: "to_consider",
        detail: 'ประชุม [System engineer Document review [BA]',
        participants: [],
        max_participants: 20
      },
      {
        id: 1,
        publish : true,
        time: '09.00-11.00',
        type: "continue",
        detail: 'Uszy [System engineer] Document review [DEV]',
        participants: [{
          imageURL: 'https://picsum.photos/200/300?random=1'
        }],
        max_participants: 20
      }]

    },
    {
      date: '13 มกราคม 2565',
      events: [{
        id: 1,
        publish : true,
        time: '10.00-11.00',
        type: "continue",
        detail: 'การตัดสินใจเรื่องการลงทุนติดตั้งคอมพิวเตอร์องค์กรใหม่',
        participants: [{
          imageURL: 'https://picsum.photos/200/300?random=1'
        }],
        max_participants: 20
      }]

    },
    {
      date: '20 มกราคม 2565',
      events: [{
        id: 1,
        publish : false,
        time: '11.00-12.00',
        type: "continue",
        detail: 'การตัดสินใจเรื่องการลงทุนติดตั้งคอมพิวเตอร์องค์กรใหม่',
        participants: [{
          imageURL: 'https://picsum.photos/200/300?random=1'
        }],
        max_participants: 20
      },
      {
        id: 1,
        publish : false,
        time: '13.30-14.30',
        type: "inform",
        detail: 'รายงานแยกตามหน่วยงาน (ผู้ใช้งานทั่วไป) Export to Excel 6 ไม่เผยแพร่',
        participants: [{
          imageURL: 'https://picsum.photos/200/300?random=1'
        }, {
          imageURL: 'https://picsum.photos/200/300?random=1'
        }, {
          imageURL: 'https://picsum.photos/200/300?random=1'
        }],
        max_participants: 20
      },
      {
        id: 1,
        publish : true,
        time: '16.00-17.30',
        type: "continue",
        detail: 'ประชุม e-meeting มอดูลจัดการประชุม จองการประชุม',
        participants: [{
          imageURL: 'https://picsum.photos/200/300?random=1'
        }],
        max_participants: 20
      }]

    },
    {
      date: '27 มกราคม 2565',
      events: [{
        id: 1,
        publish : true,
        time: '09.00-11.00',
        type: "secret",
        detail: 'ประชุม e-meeting มอดูลจัดการประชุม จองการประชุม',
        participants: [{
          imageURL: 'https://picsum.photos/200/300?random=1'
        }],
        max_participants: 20
      }]

    }]

    this.filter();
    // this.filterEventByType(AgendaApp.store.type);

     onChange ( AgendaApp.store, store =>store.type, type => {
      // this.filterEventByType(type);
      this.filter();
    });

    onChange ( AgendaApp.store, store =>store.status, status => {
      this.filter();
   });
  }

  filter() {
    const allEvents = JSON.parse(JSON.stringify(this.allEvents));

    this.events  = allEvents.map((dateEvent: DateEvent) => {
      dateEvent.events = dateEvent.events.filter(event => AgendaApp.store.type[event.type]);
      return dateEvent;
    }).filter((dateEvent: DateEvent) => dateEvent.events.length > 0);

    console.log(AgendaApp.store.status);

    this.events = this.events.map((dateEvent: DateEvent) =>{
      dateEvent.events = dateEvent.events.filter(event => {
        if(AgendaApp.store.status.published && AgendaApp.store.status.draft) {
          return true;
        }

        if(AgendaApp.store.status.published) {
          return event.publish;
        }

        if(AgendaApp.store.status.draft) {
          return !event.publish;
        }

        return false;
      });
      return dateEvent;

    }).filter((dateEvent: DateEvent) => dateEvent.events.length > 0)
  }

  // filterEventByType(type:StoreType){
  //   console.log(this.allEvents,'555555555');
    
  //   const allEvents = JSON.parse(JSON.stringify(this.allEvents));

  //   this.events  = allEvents.map((dateEvent: DateEvent) => {
  //     dateEvent.events = dateEvent.events.filter(event => type[event.type]);
  //     return dateEvent;
  //   }).filter((dateEvent: DateEvent) => dateEvent.events.length > 0)
  // }

  // filterEventByStatus(status:StoreStatus){
  //   const allEvents = JSON.parse(JSON.stringify(this.allEvents)); 

  //   this.events = allEvents.map((dateEvent: DateEvent) =>{
  //     dateEvent.events = dateEvent.events.filter(event => {
  //       if(status.published && status.draft) {
  //         return true;
  //       }

  //       if(status.published) {
  //         return event.publish;
  //       }

  //       return !event.publish;
  //     });
  //     return dateEvent;

  //   }).filter((dateEvent: DateEvent) => dateEvent.events.length > 0)
  // }

}
