import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// http module
import { HttpClientModule } from '@angular/common/http';

// shared module
import { SharedModule } from './shared/shared.module';

// components
import { HeaderComponent } from './components/header/header.component';
import { InfoToolTipComponent } from './components/info-tool-tip/info-tool-tip.component';
import { DateRangeComponent } from './components/date-range/date-range.component';

// mat design
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

// install moment
import  *as _moment from 'moment';

// forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//date format  to force as'yyyy-mm-dd' in order that match API call date form

export const DATE_FORMATS = {
  parse: {
    dateInput: 'yyyy-MM-DD',
  },
  display: {
    dateInput: 'yyyy-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateAllyLabel: 'LL',
    monthYearAllyLabel: 'MM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoToolTipComponent,
    DateRangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    // MaterialModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: DATE_FORMATS,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
