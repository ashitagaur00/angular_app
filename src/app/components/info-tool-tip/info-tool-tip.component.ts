import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-tool-tip',
  templateUrl: './info-tool-tip.component.html',
  styleUrls: ['./info-tool-tip.component.css']
})
export class InfoToolTipComponent implements OnInit {

  @Input() pageXY: any;
  constructor() {

  }
  ngOnInit(): void {
  }

}
