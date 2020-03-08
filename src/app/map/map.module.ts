import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapContainerComponent } from './map-container/map-container.component';
import { RouterModule, Routes } from '@angular/router';

const mapRoutes: Routes = [
  { path: '',  component: MapContainerComponent }
];

@NgModule({
  declarations: [MapContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mapRoutes)
  ]
})
export class MapModule { }
