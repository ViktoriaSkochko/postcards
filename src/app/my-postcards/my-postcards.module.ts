import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentComponent } from './sent/sent.component';
import { ReceivedComponent } from './received/received.component';
import { RouterModule, Routes } from '@angular/router';

const myPostcardsRoutes: Routes = [
  { path: 'sent', component: SentComponent },
  { path: 'received', component: ReceivedComponent }
];

@NgModule({
  declarations: [SentComponent, ReceivedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(myPostcardsRoutes)
  ]
})
export class MyPostcardsModule {
}
