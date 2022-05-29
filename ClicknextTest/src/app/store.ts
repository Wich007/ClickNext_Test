import {store} from 'store';
import { EventType, Status } from './agenda-page/event-list/event-list.component';


export type StoreType = {
    to_consider?: boolean,
            continue?: boolean,
            inform?: boolean,
            secret?: boolean
  };

export type StoreStatus = {
            published? : boolean,
            draft? :boolean
}

export const AgendaApp = {
    store: store({
        type: {
            to_consider: true,
            continue: true,
            inform: true,
            secret: true
        },
        status:{
            published : true,
            draft :true
        }

    }),
    toggleType : (type: EventType) => {
        AgendaApp.store.type[type] =  ! AgendaApp.store.type[type];
    },

    toggleStatus:(status: Status) => { 
        AgendaApp.store.status[status] = ! AgendaApp.store.status[status];
    }
};

// 'to_consider' | 'continue' | 'inform' | 'secret';