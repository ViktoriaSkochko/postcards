import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {


  postcard = [
    {
      text: 'hjgj',
      country: 'uu'
    },
    {
      text: '',
      country: ''
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
