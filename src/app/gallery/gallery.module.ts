import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryContainerComponent } from './gallery-container/gallery-container.component';
import { RouterModule, Routes } from '@angular/router';

const galleryRoutes: Routes = [
  { path: '', component: GalleryContainerComponent }
];

@NgModule({
  declarations: [GalleryContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes)
  ]
})
export class GalleryModule {
}
