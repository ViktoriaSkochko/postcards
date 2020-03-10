import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentComponent } from './sent/sent.component';
import { ReceivedComponent } from './received/received.component';



@NgModule({
  declarations: [SentComponent, ReceivedComponent],
  imports: [
    CommonModule
  ]
})
export class MyPostcardsModule { }
