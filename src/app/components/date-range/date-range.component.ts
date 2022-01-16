import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


import { currentDate } from '../../shared/utils';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
})
export class DateRangeComponent implements OnInit {
  @Output() dateRangeChange: any = new EventEmitter();

  //range

  range = new FormGroup({
    start: new FormControl(currentDate),
    end: new FormControl(currentDate),
  });

  disabledToday = false;

  constructor() { }

  ngOnInit(): void { }

  handleToday = (): any => {
    // console.log("today");
    //here for the reset date range to today
    this.range.setValue({
      start: currentDate,
      end: currentDate,
    });

    // after clicking to today, we enhacne that the today btn should be disabled
    // dont want the user keep clicking today to reload the api call

    this.dateRangeChange.emit([currentDate, currentDate]);
    this.disabledToday = true;

  };

  // we need to pass the  date change as dt and end_dt to parent to call the API

  checkDisabledToday = (a: any): boolean => {
    //so if the start and end range is the date for current date, we will disable the today
    if (a.start === currentDate && a.end === currentDate) {
      return (this.disabledToday = true);
    } else {
      return (this.disabledToday = false);
    }
  };

  //we need to pass the date change as dt and end_dt to parent to call the API
  dateRangeChangeEmit = (
    dateRangeStart: HTMLInputElement,
    dateRangeEnd: HTMLInputElement
  ) => {
    // when we select range it will log , then if select the range end, will log again
    // we need to force only log the final range and start and end
    if (dateRangeStart.value !== ' ' && dateRangeEnd.value !== ' ') {
      // console.log([dateRangeStart.value, dateRangeEnd.value]);

      const start = dateRangeStart.value;
      const end = dateRangeEnd.value;
      this.checkDisabledToday({ start, end });
      this.dateRangeChange.emit([dateRangeStart.value, dateRangeEnd.value]);
    }
  };

  //according to api limitation, we could only fetch 8 days ago and 2 days later data
  // so here we need to  limit user to select the range
  // so I used angular material datefilter for it

  limitDaysAgo = (days: number): Date => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() - days));
  };

  limitDaysAfter = (days: number): Date => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + days));
  };
  dateFilterFn = (d: Date): boolean => {
    //Date | null
    // prevent 8 days ago and 2 days later from being selected

    return d >= this.limitDaysAgo(8) && d <= this.limitDaysAfter(2);
  };
}
