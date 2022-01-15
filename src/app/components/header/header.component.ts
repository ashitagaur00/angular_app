import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() weatherData: any;
  @Input() isLoading: any;

  constructor() { }

  ngOnInit(): void {
  }

}
