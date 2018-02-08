import { Component, OnInit, Input } from '@angular/core';
import { Withdrawal } from './local.model';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @Input()
  withdrawal: Withdrawal;

  constructor() { }

  ngOnInit() {
  }

}
