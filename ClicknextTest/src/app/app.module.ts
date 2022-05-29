import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgendaPageComponent } from './agenda-page/agenda-page.component';
import { TypeFilterComponent } from './agenda-page/type-filter/type-filter.component';
import { StatusFilterComponent } from './agenda-page/status-filter/status-filter.component';
import { EventListComponent } from './agenda-page/event-list/event-list.component';
import { SerchFilterComponent } from './agenda-page/serch-filter/serch-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CalendarComponent } from './agenda-page/calendar/calendar.component';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core'; 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    AgendaPageComponent,
    TypeFilterComponent,
    StatusFilterComponent,
    EventListComponent,
    SerchFilterComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatTooltipModule,
    MatMenuModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'th-TH'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
