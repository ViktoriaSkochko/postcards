import { Component, OnInit } from '@angular/core';
import { POSTCARDS } from '../../postcard/mock-postcards';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  postcards = POSTCARDS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
