import { Component, OnInit } from '@angular/core';
import { POSTCARDS } from '../mock-postcards';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {
  postcards = POSTCARDS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
