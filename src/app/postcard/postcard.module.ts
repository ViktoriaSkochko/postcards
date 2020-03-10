import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostcardComponent } from './postcard/postcard.component';


@NgModule({
  declarations: [PostcardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostcardComponent
  ]
})
export class PostcardModule {
}
