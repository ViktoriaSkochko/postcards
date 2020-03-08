import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
