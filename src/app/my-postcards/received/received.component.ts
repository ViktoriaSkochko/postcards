import { Component, OnInit } from '@angular/core';
import { POSTCARDS } from '../../postcard/mock-postcards';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {
  postcards = POSTCARDS;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.postcards);
  }

}
