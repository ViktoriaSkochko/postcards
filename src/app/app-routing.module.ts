import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)
  },
  {
    path: 'my-postcards',
    loadChildren: () => import('./my-postcards/my-postcards.module').then(m => m.MyPostcardsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
