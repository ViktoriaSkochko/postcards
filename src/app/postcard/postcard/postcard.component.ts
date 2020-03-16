import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {
@Input() postcard;

  constructor() {
  }

  ngOnInit(): void {
  }

}
